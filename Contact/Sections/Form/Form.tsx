import React, { Component } from "react";
import styles from "./Form.module.css";
import { Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import SubmittedPage from "./Submitted/Submitted";

const Reaptcha = require("reaptcha");

const { withFormik } = require("formik");

interface Input {
  inputName: string;
  labelName: string;
  inputType: string;
  placeholder: string;
}

interface FormikInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
  captchaDidVerify: boolean;

  formDidSubmit?: boolean; //server responded with a 2xx
  errorDidOccur?: boolean; //responded with anything other than 2xx
  isWaiting?: boolean; //used to display Sending...  on the button until server response returns
}

interface IState {
  typicalInputs: Input[];
  messageConfig: Input;
}
interface IProps {
  values: FormikInputs;
  errors: any;
  touched: any;
}

class ContactForm extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      typicalInputs: [
        // covers all components that uses the <input tag
        {
          inputName: "name",
          labelName: "Full Name",
          inputType: "text",
          placeholder: "",
        },
        {
          inputName: "email",
          labelName: "Email Address",
          inputType: "text",
          placeholder: "",
        },
        {
          inputName: "subject",
          labelName: "Subject",
          inputType: "text",
          placeholder: "",
        },
      ],
      messageConfig: {
        //an additional textarea
        inputName: "message",
        labelName: "Message",
        inputType: "textarea",
        placeholder: "",
      },
    };
  }

  //this function sets the flag to signify that the verifyication went fine
  oncaptchaVerifyCallback: any = () => {
    this.props.values.captchaDidVerify = true;
  };

  render() {
    const { typicalInputs, messageConfig } = this.state;

    const inputs: JSX.Element[] = typicalInputs.map(
      (config: Input, index: number) => {
        return (
          <div key={config.inputName} className={styles.form_group}>
            <label
              style={{
                color:
                  this.props.touched[config.inputName] &&
                  this.props.errors[config.inputName]
                    ? "red"
                    : "#0b1b20",
              }}
              htmlFor={config.inputName}
              className={styles.form_label}
            >
              {config.labelName}
            </label>
            <Field
              key={config.inputName + index}
              name={config.inputName}
              type={config.inputType}
              placeholder={config.placeholder}
              style={{
                borderColor:
                  this.props.touched[config.inputName] &&
                  this.props.errors[config.inputName]
                    ? "red"
                    : "#ccc",
              }}
              className={styles.input_field}
              id={config.inputName}
            />
            <ErrorMessage
              name={config.inputName}
              component="div"
              key={`${config.inputName}  ${index}  error`}
              className={styles.form_error}
            />
          </div>
        );
      }
    );

    const messageBoxOutp: JSX.Element = (
      <div className={styles.form_group}>
        <label
          style={{
            color:
              this.props.touched[messageConfig.inputName] &&
              this.props.errors[messageConfig.inputName]
                ? "red"
                : "#0b1b20",
            marginTop: 1,
          }}
          htmlFor={messageConfig.inputName}
          className={styles.form_label}
        >
          Message
        </label>
        <Field
          component={messageConfig.inputType}
          name={messageConfig.inputName}
          placeholder={messageConfig.placeholder}
          className={styles.input_textarea}
          style={{
            borderColor:
              this.props.touched[messageConfig.inputName] &&
              this.props.errors[messageConfig.inputName]
                ? "red"
                : null,
          }}
          id={messageConfig.inputName}
        />

        <ErrorMessage
          name={messageConfig.inputName}
          component="div"
          key={`${messageConfig.inputName}   error`}
          className={styles.form_error}
        />
      </div>
    );

    return (
      <section className={styles.sec_padding}>
        <div className={styles.wrapper}>
          {!this.props.values.formDidSubmit ? (
            <div className={styles.contact_info_space}>
              <div className={styles.contact_info_box}>
                <div className={styles.contact_form}>
                  <Form>
                    {/*INPUTS */}
                    {inputs}

                    {/*textarea*/}
                    {messageBoxOutp}

                    {/*Google Reaptcha */}
                    <div style={{ marginTop: 25, marginBottom: 25 }}>
                      <Reaptcha
                        sitekey="6LepSssUAAAAAIyoTpvd8bsfgw3bWGQFwDHtSolE"
                        onVerify={this.oncaptchaVerifyCallback}
                      />
                    </div>

                    <button
                      data-message="This button submits the contact form."
                      type="submit"
                      className={styles.form_button}
                    >
                      {!this.props.values.isWaiting
                        ? "Send Message"
                        : "Sending..."}
                    </button>
                    {this.props.values.errorDidOccur ? (
                      <p className={styles.submitError}>
                        An Error Has Occured. Please Try Again Later.
                      </p>
                    ) : null}
                  </Form>
                </div>
              </div>
            </div>
          ) : (
            <SubmittedPage />
          )}
        </div>
      </section>
    );
  }
}

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Please Supply Your Full Name")
    .required("Please Enter Your Full Name"),

  email: Yup.string()
    .email("Please Enter A Valid Email Address")
    .required("Please Enter A Valid Email Address"),

  subject: Yup.string()
    .min(1, "Please Enter A Subject")
    .required("Please Enter A Subject"),

  message: Yup.string()
    .min(1, "Please Supply A Message")
    .required("Please Supply A Message"),
});

const contactForm = withFormik({
  mapPropsToValues: (): FormikInputs => ({
    name: "",
    email: "",
    subject: "",
    message: "",
    captchaDidVerify: false, //used for the captcha
  }),
  handleSubmit: (values: any, bag: any): void => {
    //used to block the process if captcha verification was not performed
    if (!values.captchaDidVerify) {
      return;
    }

    //set Loading
    bag.setFieldValue("isWaiting", true);

    //send request
    fetch(
      "https://us-central1-atwellerrandswebsite.cloudfunctions.net/cloudmail/send-contact-form",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    )
      .then((res): void => {
        if (res.status === 200) {
          //stop loading and display success message
          bag.setFieldValue("isWaiting", false);
          bag.setFieldValue("formDidSubmit", true);
        } else {
          //stop loading and display error message
          bag.setFieldValue("isWaiting", false);
          bag.setFieldValue("errorDidOccur", true);
        }
      })
      .catch((err): void => {
        if (values.isWaiting) {
        }
        //stop loading and display error message
        bag.setFieldValue("isWaiting", false);
        bag.setFieldValue("errorDidOccur", true);
      });
  },
  validationSchema: formSchema,
})(ContactForm);

export default contactForm;
