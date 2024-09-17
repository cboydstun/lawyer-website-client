import React from "react"; //Import React
import "./Footer.css"; //Import CSS file
import JCicon from "../assets/photos2.jpg" //Import photo

//Creating review section
const reviews = [
  "Powerhouse!!! Amazing, worth every penny!! Justice was served!!! You can't go wrong hiring her!!!! I'm so grateful for her!!!! - Heather M",
  "Jackie Kribel is an outstanding attorney. If you want an attorney that will remove the fear and doubt you may have, she does just that. Being in a legal battle is scary. Jackie Kribel put my mind at ease. She is confident & experienced and I promise exactly what you need when you need legal representation. Thank you Kribel Law Firm for you outstanding attention to detail and perfect representation in my case. - Rich R.",
  "Mrs. Kriebel has been wonderful on my case. She has been aggressive and knowledgeable. My case has been going on for a year and not once has she dropped the ball. She has kept me informed throughout the entire process. She definitely listens and works with me to look out for the best interest of my two young children. Highly recommend. - Marlene",
  "My wife and hired Mrs. Kriebel for a CPS custody battle. We had to fight the state, the Ad Litem and the Foster Parents. Mrs. Kriebel was able to get the job done and by the end the state and the Ad Litem was on our side. She got us standing when there wasn’t any. She was extremely impressive and aggressive in this case. The absolute best Attorney in Texas!-John",
  "She was my public defender in a criminal case where I was pretty much doomed . Thanks to her investigative skills, hard work and determination she got the case dismissed due to technicality!! Awesome work and I would highly recommend!!-Joshue",
  "She’s feisty and a go getter. So glad I went with her! She answered my call on a weekend which I wasn’t expecting! Allowed me to communicate my concern bc I had no idea what I was looking at, at the time. She met with me the following Monday! She plays no games and she is great at what she does! Don’t think about it, just do it!- Emily",
];

//Creating footer section
const Footer = () => {
  return (
    <div>
    <footer className=" bg-red-900 text-yellow-300 py-8 px-4 flex flex-col items-center overflow-x-hidden">
      <div className="container mx-auto px-3 flex flex-col items-center">
        <img 
          src={JCicon} 
          alt="icon image" 
          className=" absolute left-4 w-24 h-26 mb-4"
        />
       <a href="lawyer-website-client\src\components\Attorneyprofile.jsx" className="text-yellow-300 underline mb-4 absolute left-4 py-40">
        Attorney Profile
      </a>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md">
            {review}
            </div>
        ))}
      </div>
    </div>
  </div>
  <div className="text-center mt-4 text-lg">
  <p>Take Control of Your Legal Situation</p>
  <p className="font-semibold mt-2">Book your Consultation: <span className="text-yellow-300">210-677-5586</span></p>
  </div>
</footer>
</div>
  );
}


export default Footer;
