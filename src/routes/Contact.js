import React from "react";
import "./Contact.css";

function Contact() {
 return (
  <div className="contact">
      <div className="contact-info">
      <p className="email">
        <a href="mailto:william@dwjcurbsidellc.com" className="mailto-link">Email: william@dwjcurbsidellc.com</a>
      </p>
      <p className="phone">
        <a href="tel:+1347-509-4212" className="tel-link">Phone: 347-509-4212</a>
      </p>
    </div>
  </div>  
 );
}




export default Contact;