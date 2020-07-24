import React from "react";
import styles from "./Pricing.module.css";

interface Plan {
  serviceName: string;
  img_url: string;
  planPrice: string;
  billed: string;
  start: string;
}
const Pricing: React.FC = () => {
  const planStructure: Plan[] = [
    {
      serviceName: "Property Management",
      billed: "Rates are billed per hour or part thereof.",
      img_url:
        "data:image/png;base64,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",
      planPrice: "$30",
      start: "Rates Start At",
    },
  ];

  const simplePlanOutput: JSX.Element[] = planStructure.map(
    (config: Plan, index: number) => (
      <article key={index} className={styles.plan}>
        <h3 className={styles.service_name}>{config.serviceName}</h3>
        <div className={styles.img_box}>
          <img src={config.img_url} alt="service_img_icon" />
        </div>

        <p className={styles.start}>{config.start}</p>
        <div className={styles.price_adjust_box}>
          <p className={styles.price}>{config.planPrice}</p>
        </div>

        <p className={styles.disclaimer}>{config.billed}</p>
      </article>
    )
  );
  return (
    <section className={`${styles.sec_padding} ${styles.sec_grey}`}>
      <div className={styles.wrapper}>
        <h2 className={styles.pricing_sec_title}>Our Pricing Plan</h2>
        <p className={styles.princing_sec_desc}>
          Our prices are determined by our assessment of market forces. It is by
          the hour or part thereof with no additional fees (e.g mileage & AC
          fees). What we charge benefits our client and earns us a profit and is
          discounted compared to global rates.
        </p>

        <div className={styles.plan_space}>
          <div className={styles.plan_box}>
            <article className={styles.plan}>
              <h3 className={styles.service_name}>Errands</h3>
              <div className={styles.img_box}>
                <img
                  style={{ height: 50, width: 50 }}
                  src="data:image/png;base64,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"
                  alt="service_img_icon"
                />
              </div>
              <div className={styles.day_space}>
                <div className={styles.day_box}>
                  <div className={styles.day_info}>
                    <p className={styles.day}>Monday-Friday</p>
                    <div className={styles.special_price_box}>
                      <p className={styles.special_price}>$25</p>
                    </div>
                  </div>
                  {/* <div className={styles.day_info}>
                                        <p className={styles.day}>Saturday (if available)</p>
                                        <div className={styles.special_price_box}>
                                            <p className={styles.special_price}>$30</p>
                                        </div>
                                    </div>
                                    <div className={styles.day_info}>
                                        <p className={styles.day}>Sunday or Holidays (if available)</p>
                                        <div className={styles.special_price_box}>
                                            <p className={styles.special_price}>$36</p>
                                        </div>
                                    </div> */}
                </div>

                <p className={styles.disclaimer}>
                  Note that errands booked after 5pm will be billed at $30.
                </p>
                <p className={styles.disclaimer}>
                  Rates are billed per hour or part thereof.
                </p>
              </div>
            </article>

            <article className={styles.plan}>
              <h3 className={styles.service_name}>Transportation</h3>
              <div className={styles.img_box}>
                <img
                  style={{ height: 50, width: 50 }}
                  src="data:image/png;base64,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"
                  alt="service_img_icon"
                />
              </div>
              <div className={styles.day_space}>
                <div className={styles.day_box}>
                  <div className={styles.day_info}>
                    <p className={styles.day}>Standard</p>
                    <div className={styles.special_price_box}>
                      <p className={styles.special_price}>$25</p>
                    </div>
                  </div>
                  <div className={styles.day_info}>
                    <p className={styles.day}>Regular Tours</p>
                    <div className={styles.special_price_box}>
                      <p className={styles.special_price}>$50</p>
                    </div>
                  </div>
                  <div className={styles.day_info}>
                    <p className={styles.day}>Groups Tours (5-7 people)</p>
                    <div className={styles.special_price_box}>
                      <p className={styles.special_price}>$60</p>
                    </div>
                  </div>
                </div>
                <p className={styles.disclaimer}>
                  Note that "standard" transportation booked after 5pm will be
                  billed at $30.
                </p>
                <p className={styles.disclaimer}>
                  Rates are billed per hour or part thereof.
                </p>
              </div>
            </article>

            <article className={styles.plan}>
              <h3 className={styles.service_name}>Rentals</h3>
              <div className={styles.img_box}>
                <img
                  style={{ height: 50, width: 50 }}
                  src="data:image/png;base64,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"
                  alt="service_img_icon"
                />
              </div>
              <div className={styles.day_space}>
                <div className={styles.day_box}>
                  <div className={styles.day_info}>
                    <p className={styles.day}>Car Rentals as low as</p>
                    <div className={styles.special_price_box}>
                      <p className={styles.special_price}>$100</p>
                    </div>
                    <p className={styles.special_adjust}>per Hour.</p>
                  </div>

                  <div className={styles.day_info}>
                    <p className={styles.day}>House Rentals</p>
                    <p style={{ color: "red" }}>
                      Price will depend on availability.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {simplePlanOutput}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
