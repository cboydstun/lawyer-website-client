import React from "react";
import JCicon from "../assets/photos2.jpg"

const Attorneyprofile = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
    },
    heading: {
      color: '#2c3e 50',
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    paragraph: {
      color: '#34495e',
      fontSize: '1.1em',
      marginBottom: '15px',
    },
  };
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.heading}>
        <img src={JCicon} alt="icon image "/> 
          Jacqueline R. Kriebel Attorney Phone 210-677-5586 Fax 210-467-5788
          Email Jacqueline R. Kriebel
        </h1>
             
        <p>
          Jacqueline Kriebel is originally from Pennsylvania, where she
          developed a spirited work ethic and aggressive style of
          representation. She is dedicated to providing a client-centered
          representation where each client is treated with respect and dignity
          regardless of your legal situation. She will return your phone call as
          soon as practical. Jacqueline Kriebel listens patiently while you
          explain your situation and provides immediate feedback as to how your
          case should be handled and what you can expect throughout the legal
          process.
        </p>
      </div>
      <div>
        <p>
          Additionally, Jacqueline Kriebel aggressively cross-examines witnesses
          and attacks their credibility to consistently win at trial. Because of
          her experience as a former teacher, Jacqueline Kriebel knows how to
          educate a jury to understand the legalities of your case and to sway
          them to your side. Plain and simple, Jacqueline Kriebel wins! She
          helps you find peace throughout the legal process by providing you the
          knowledge and confidence you need to make the important decisions in
          your case. Her motto is, “Put your stress with me. If I’m not worried,
          you shouldn’t be worried.”
        </p>
      </div>
      <div>
        <h1>Areas of Practice</h1>
        <p>
          <li>Divorce</li>
          <li>Child Support & Custody & Modifications</li>
          <li>Criminal Defense</li>
          <li>Department of Family and Protective Services (“CPS”) Cases</li>
        </p>
      </div>
      <div>
        <h1>Bar Admissions</h1>
        <li>Texas, 2004</li>
        <li>U.S. District Court Western District of Texas</li>
      </p>
      </div>
      <div>
        <h1>Education</h1>
        <p>
          <li>
            St. Mary's University School of Law, San Antonio, Texas J.D. - 2004
          </li>
          <li>
            Clarion University of Pennsylvania, Clarion, Pennsylvania B.A. cum
            laude - 1995 Major: Psychology Major: B.A.E Secondary Education
          </li>
        </p>
      </div>
      <div>
        <h1>Honors and Awards</h1>
        <p>
          <li>Superb Rated Attorney, 2015 - Present</li>
          <li>10 Best Family Law Attorneys, 2018 - Present</li>
          <li>10 Best Attorneys, 2018 - Present</li>
          <li>Client Satisfaction Award, 2015 - Present</li>
        </p>
      </div>
      <div>
        <h1>Professional Associations and Memberships</h1>
        <p>
          <li>San Antonio Bar Association</li>
        </p>
      </div>
      <div>
        <h1>Past Employment Positions</h1>
        <p>
          <li>Martin & Drought, P.C, Associate Attorney, 2004 - 2007</li>
        </p>
      </div>
    </div>
  );
};

export default Attorneyprofile;
