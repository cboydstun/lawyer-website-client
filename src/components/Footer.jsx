import React from "react";
import "./Footer.css"; //Import CSS file

const reviews = [
  "Powerhouse!!! Amazing, worth every penny!! Justice was served!!! You can't go wrong hiring her!!!! I'm so grateful for her!!!! - Heather M",
  "Jackie Kribel is an outstanding attorney. If you want an attorney that will remove the fear and doubt you may have, she does just that. Being in a legal battle is scary. Jackie Kribel put my mind at ease. She is confident & experienced and I promise exactly what you need when you need legal representation. Thank you Kribel Law Firm for you outstanding attention to detail and perfect representation in my case. - Rich R.",
  "Mrs. Kriebel has been wonderful on my case. She has been aggressive and knowledgeable. My case has been going on for a year and not once has she dropped the ball. She has kept me informed throughout the entire process. She definitely listens and works with me to look out for the best interest of my two young children. Highly recommend. - Marlene",
  "My wife and hired Mrs. Kriebel for a CPS custody battle. We had to fight the state, the Ad Litem and the Foster Parents. Mrs. Kriebel was able to get the job done and by the end the state and the Ad Litem was on our side. She got us standing when there wasn’t any. She was extremely impressive and aggressive in this case. The absolute best Attorney in Texas!-John",
  "She was my public defender in a criminal case where I was pretty much doomed . Thanks to her investigative skills, hard work and determination she got the case dismissed due to technicality!! Awesome work and I would highly recommend!!-Joshue",
  "She’s feisty and a go getter. So glad I went with her! She answered my call on a weekend which I wasn’t expecting! Allowed me to communicate my concern bc I had no idea what I was looking at, at the time. She met with me the following Monday! She plays no games and she is great at what she does! Don’t think about it, just do it!- Emily",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img 
          src="assets/photos2.jpg" 
          alt="Footer Image" 
          className="footer-image"
        />
        <div className="review-container">
          <h2 className="footer-heading">Client Reviews</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            {review}
            </div>
        ))}
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
