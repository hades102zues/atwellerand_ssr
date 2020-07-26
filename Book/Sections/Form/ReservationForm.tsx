import React, { Component } from "react";
import styles from "./ReservationForm.module.css";
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

interface IState {
  typicalInputs: Input[];
  servicesConfig: string[];
  messageConfig: Input;
}

interface FormikInputs {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  captchaDidVerify: boolean;

  formDidSubmit?: boolean; //server responded with a 2xx
  errorDidOccur?: boolean; //responded with anything other than 2xx
  isWaiting?: boolean; //used to display Sending...  on the button until server response returns
}
interface IProps {
  //the following are three properties passed in by Formik
  values: FormikInputs;
  errors: any;
  touched: any;
}

class ReservationForm extends Component<IProps, IState> {
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
          inputName: "phone",
          labelName: "Phone Number",
          inputType: "text",
          placeholder: "E.g. 246-523-5028",
        },
      ],

      //the services provided by the company
      servicesConfig: [
        "Car Rental",
        "House/Apartment Rental",
        "Appliances Rental",
        "Shopping",
        "Event Planning",
        "Package Delivery",
        "Chauffeuring",
        "Regular Tours",
        "Group Tours",
        "Airport Transfers",
        "Personal Shuttles",
        "Property Maintenance",
        "Tenant Screening",
        "Banking and Collection of Rent",
      ],

      messageConfig: {
        //an additional textarea
        inputName: "message",
        labelName: "Additional Information",
        inputType: "textarea",

        placeholder:
          "If you have any additional information that you would like to provide please type it here.",
      },
    };
  }

  //this function handles adding and removing services from the formik service variable
  onSelectChangeHandler: any = (serviceName: string) => {
    const formikServices = [...this.props.values.services];

    //check array for service
    if (!formikServices.includes(serviceName)) {
      //add the service
      formikServices.push(serviceName);

      //update formik
      this.props.values.services = formikServices;
    } else {
      //cut out the service
      const updatedServices = formikServices.filter((service, indedx) => {
        return serviceName !== service;
      });

      //update formik
      this.props.values.services = updatedServices;
    }
  };

  //this function sets the flag to signify that the verifyication went fine
  oncaptchaVerifyCallback: any = () => {
    this.props.values.captchaDidVerify = true;
  };

  render() {
    const { typicalInputs, servicesConfig, messageConfig } = this.state;

    //this will hold all of the Error JSX elements corresponsding to our input fields
    const inputErrorMessages: JSX.Element[] = [];

    const inputs: JSX.Element[] = typicalInputs.map(
      (config: Input, index: number) => {
        return (
          <div key={config.inputName} className={styles.form_group}>
            <label
              //*Note that you must use && and note that the inputNames must exactly match the properties defined in the Formik -- in order for touch and errors to be accessed
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
              className={styles.input_field}
              style={{
                borderColor:
                  this.props.touched[config.inputName] &&
                  this.props.errors[config.inputName]
                    ? "red"
                    : "#ccc",
              }}
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

    //the following generates the services checkboxes
    const services: JSX.Element[] = servicesConfig.map(
      (service: string, index: number) => (
        <div key={service} className={styles.button_adjustment}>
          <input
            type="checkbox"
            id={service}
            name={service}
            onChange={(): void => {
              this.onSelectChangeHandler(service);
            }}
          />
          <label htmlFor={service}>{service}</label>
        </div>
      )
    );

    //Note That inputErrorMessages[0] will be the error message for the services
    inputErrorMessages.push(
      <ErrorMessage
        name="services"
        component="div"
        key={`${services} 1 error`}
        className={styles.form_error}
      />
    );

    //the following generates the message box. User adding a message will be optional
    const messageBox = (
      <div className={styles.form_group}>
        <label
          htmlFor={messageConfig.inputName}
          className={styles.form_label}
          style={{ marginTop: 40 }}
        >
          {messageConfig.labelName}
        </label>
        <Field
          component={messageConfig.inputType}
          name={messageConfig.inputName}
          placeholder={messageConfig.placeholder}
          className={styles.input_textarea}
          id={messageConfig.inputName}
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

                    <div
                      className={styles.services_button_space}
                      style={{
                        borderColor:
                          this.props.touched["services"] &&
                          this.props.errors["services"]
                            ? "red"
                            : "#ccc",
                      }}
                    >
                      <div className={styles.services_button_box}>
                        <div
                          className={styles.serives_button_box__title_adjuster}
                        >
                          <p
                            className={styles.serives_button_box__title}
                            style={{
                              color:
                                this.props.touched["services"] &&
                                this.props.errors["services"]
                                  ? "red"
                                  : "#333",
                            }}
                          >
                            Choose Your Services
                          </p>
                        </div>

                        <div className={styles.radio_button_space}>
                          <div className={styles.radio_button_box}>
                            {/*SERVICES*/}
                            {services}
                          </div>
                        </div>
                        {inputErrorMessages[0]}
                      </div>
                    </div>

                    {/*MESSAGE BOX */}
                    {messageBox}

                    {/*Google Reaptcha */}
                    <div style={{ marginTop: 25, marginBottom: 25 }}>
                      <Reaptcha
                        sitekey="6LepSssUAAAAAIyoTpvd8bsfgw3bWGQFwDHtSolE"
                        onVerify={this.oncaptchaVerifyCallback}
                      />
                    </div>

                    <button
                      data-message="This button submits the reservation form."
                      type="submit"
                      className={styles.form_button}
                    >
                      {" "}
                      {!this.props.values.isWaiting
                        ? "Submit Request"
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

  phone: Yup.string()
    .min(7, "Please Check The Phone Number Entered")
    .required("Please Enter A Valid Phone Number"),

  services: Yup.array().required("Please Select At Least One Service"),
});

const requestForm = withFormik({
  mapPropsToValues: (): FormikInputs => ({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    captchaDidVerify: false, //used for the captcha
  }),

  //this function can never be  triggered until the form is valid
  handleSubmit: (values: any, bag: any): void => {
    //used to block the process if captcha verification was not performed
    if (!values.captchaDidVerify) {
      return;
    }

    //set Loading
    bag.setFieldValue("isWaiting", true); //this function dynamically applies a new property isWaiting with value true

    //send request
    fetch(
      "https://us-central1-atwellerrandswebsite.cloudfunctions.net/cloudmail/send-request-form",
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
        //stop loading and display error message
        bag.setFieldValue("isWaiting", false);
        bag.setFieldValue("errorDidOccur", true);
      });
  },
  validationSchema: formSchema,
})(ReservationForm);

export default requestForm;
