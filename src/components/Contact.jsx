import React from "react";
import "./css/Contact.css";
import img24 from "./assets/img24.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className="contact">
      <div className="d-flex justify-content-center flex-wrap">
        <h1>Let's build something intelligent together.</h1>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <div>
          <div className="form-box">
            <h1>What's your name?</h1>
            <input type="text" name="" className="field" defaultValue="" required placeholder="Sandip Adak *" id="form-name-1"
            />
          </div>
          <div className="form-box">
            <h1>What's your email?</h1>
            <input type="email" name="" className="field" defaultValue="" required placeholder="sandipadak000@gmail.com *" id="form-email"
            />
          </div>
          <div className="form-box">
            <h1>What services are you looking for?</h1>
            <input type="text" name="" className="field" defaultValue="" required placeholder="MLOps , AI Intelligence...  *" id="form-service" 
            />
          </div>
          <div className="form-box">
            <h1>Your message</h1>
            <textarea name="" className="field" defaultValue="" required placeholder="Hello Sandip, can you help me with... *" id="form-message" style={{ resize: "vertical" }}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <button type="button" className="btn ">
              Send button
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="col">
            <div className="box-right-col ">
              <ul>
                <li>
                  <div className="contact-img">
                    <img src={img24} alt="Contact-Image" />
                  </div>
                </li>
                <li>
                  <a href="mailto:sandipadak000@gmail.com" target="_blank" rel="noopener noreferrer" className="btn"> {" "} sandipadak000@gmail.com{" "}</a>
                </li>
                <li>
                  <a href="https://wa.me/9134460122" target="_blank" rel="noopener noreferrer"  className="btn" > {" "} +91 9134460122{" "}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="socials d-flex justify-content-center pb-5">
        <li><a href="https://wa.me/9134460122" ><FontAwesomeIcon icon={faWhatsapp} size="4x" color="white" /></a></li>
        <li><a href="https://www.linkedin.com/in/sandip-adak-70586a2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" > <FontAwesomeIcon icon={faLinkedin} size="4x" color="white" /></a></li>
        <li><a href="https://www.facebook.com/sandip.adak.1401?mibextid=kFxxJD" > <FontAwesomeIcon icon={faFacebook} size="4x" color="white" /></a></li>
        <li><a href="https://www.instagram.com/sandip_adak_?utm_source=qr&igsh=N2NjcjA0OXBzdDBv" > <FontAwesomeIcon icon={faInstagram} size="4x" color="white" /></a></li>
      </div>
    </div>
  );
}

export default Contact;
