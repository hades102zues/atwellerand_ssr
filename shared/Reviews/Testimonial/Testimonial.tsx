import React from "react";
import styles from "./Testimonial.module.css";
import { Carousel } from "react-bootstrap";

//the quote icon for each testimonal
const quote = "/quotes.png";

interface Testimonial {
  name: string;
  description: string;
  country?: string;
}

const Testimonial: React.FC = () => {
  //data list for the testimonial cards
  const testimonialInput: Testimonial[] = [
    {
      name: "Krystal Gour",
      description: `Excellent Service. Always on time. Will recommend to anyone!!`,
      country: "Trinidad",
    },
    {
      name: "Leslieann Boatswain-tom",
      description:
        "EXCELLENT service no complaints whatsoever. Very friendly and always on time.",
      country: "Trinidad",
    },
    {
      name: "Velda Taylor",
      description: `I found the service provided by ASDA was very professional and efficient. Within 2 days of using this service I was able to get a tenant due to his clear and detailed photos and other relevant information.`,
    },
    {
      name: "Kathy Wiggins",
      description: `Letting my Peep know this Service is 100% Great!`,
    },
  ];

  const testimonials: JSX.Element[] = testimonialInput.map(
    (config: Testimonial, index: number): JSX.Element => (
      <Carousel.Item key={index}>
        <article className={styles.testimonial}>
          {/*this dictates the entire height and width of the cards */}
          <div className={styles.testimonial_img_box}>
            <img alt="testimonial_quote_icon" src={quote} />
          </div>
          <p className={styles.testimonial_name}>{config.name.trim()}</p>
          <p className={styles.testimonial_body}>{config.description.trim()}</p>
          {config.country ? (
            <p className={styles.testimonial_body}>({config.country.trim()})</p>
          ) : null}
        </article>
      </Carousel.Item>
    )
  );

  return (
    <div className={styles.testimonial_space}>
      <div className={styles.testimonial_box}>
        <Carousel controls={false} indicators={false}>
          {testimonials}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
