import React from "react";
import JacqulineRKriebleImage from "../assets/photos2.jpg";
import JcIcon from "../assets/kriebellaw.png";

const About = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif, bold, 3xl",
      lineHeight: 1.6,
    },
    heading: {
      color: "#2c3e 50",
      fontSize: "2.5em",
      marginBottom: "20px",
    },
    paragraph: {
      color: "#34495e",
      fontSize: "1.1em",
      marginBottom: "15px",
    },
    imageContainer: {
      display: "flex",
      justifycontent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
  };
  return (
    <div style={styles.container}>
      <div
        className="rounded-full flex justify-center gap-20"
        style={styles.imageContainer}
      >
        <img
          className="rounded-full flex justify-center gap-20"
          src={JcIcon}
          alt="Image"
          height={450}
          width={300}
        />
      </div>
      <div className="section-border">
        <h1 style={styles.heading}>Meet Jacqueline R. Kriebel</h1>
        <div>
          <p style={styles.paragraph}>
            Before Jacqueline R. Kriebel earned her Juris Doctor in 2004, her
            studies were in psychology and education. With this foundation, she
            has the sensitivity and listening skills to really hear what you and
            your family are going through. Over the years, she has developed a
            work ethic dedicated to meticulous case preparation and aggressive
            representation. She focuses on treating each client with respect and
            dignity regardless of what their legal situation is.
          </p>
        </div>
      </div>
      <div className="section-border">
        <h1 style={styles.heading}>More About Jacqueline R. Kriebel</h1>
        <div>
          <p style={styles.paragraph}>
            She will return your phone call as soon as is practical. She will
            listen patiently while you explain your situation and provide
            immediate feedback as to how your case should be handled and what
            you can expect throughout the legal process. For criminal defense
            cases, she has a solid reputation of aggressively cross-examining
            witnesses and attacking their credibility to consistently win at
            trial. Because of her experience as a former teacher, she knows how
            to communicate effectively with a jury. When jurors clearly
            understand the legalities of your case, you have a better chance in
            court. She aims to win your case. She can help you find peace
            throughout the legal process by providing you the knowledge and
            confidence you need to make the important decisions in your case.
          </p>
        </div>
        <div>
          <p style={styles.paragraph}>
            Ms. Kriebel has worked closely with teens, including troubled youth,
            as a 9th grade world geography teacher. She has also been a mental
            health caseworker and a counselor at a shelter for battered women.
            She remains active in the Texas community and has two children of
            her own. You may read more about Ms. Kriebel's professional
            background by following the link below: Jacqueline R. Kriebel.
          </p>
        </div>
      </div>
      <div className="section-border">
        <div>
          <h1 style={styles.heading}>
            You Deserve an Experienced Attorney You Can Trust
          </h1>
          <p>
            It is important to have a divorce lawyer on your side to help you
            understand what you might face. Attorney Kriebel can help you. She
            helps people from all walks of life who are living or working in San
            Antonio and nearby counties who are getting divorced, have child
            custody issues to solve, want help with their adoption and are
            contending with DFPS matters. Not only does Ms. Kriebel provide
            knowledgeable family law representation, but she also provides
            trusted criminal defense for men and women throughout Greater San
            Antonio.
          </p>
        </div>
      </div>

      <div className="section-border">
        <div>
          <h1 style={styles.heading}>
            Call Kriebel Law Firm, PLLC Today to Schedule an Appointment
          </h1>
          <p style={styles.paragraph}>
            Ms. Kriebel will fight to protect your rights. Get peace of mind by
            working with an attorney who is in your corner. Email or call her
            office in San Antonio at 210-677-5586 to schedule a personal
            consultation.
          </p>
        </div>
      </div>
      <div>
        <form action="" method="get">
          Contact Form
        </form>
      </div>
    </div>
  );
};

export default About;
