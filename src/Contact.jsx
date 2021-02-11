import React from "react";

function Contact() {
  return (
    <div className="contact">
      <img
        src="https://static.wixstatic.com/media/bfdf85_bb32704cfdf641b78b2207124c945fc8.png/v1/fill/w_230,h_126,al_c,q_85/bfdf85_bb32704cfdf641b78b2207124c945fc8.webp"
        alt="Mail"
      />
      <h1>Contact Me!</h1>
      <div className="contact-info">
        <p>
          <a href="mailto:info@myemail.com">info@myemail.com</a> | Phone:
          914-456-8772
        </p>
      </div>
      <div className="contact-div-form">
        <form action="submit" className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" size="50" />
          <input type="tel" placeholder="Phone" />
        </form>
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Write your message here..."
        ></textarea>
      </div>
    </div>
  );
}

export default Contact;
