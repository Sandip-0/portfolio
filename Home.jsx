import React from "react";
import "./css/Home.css";
import LiveWallpaper from "./assets/LiveWallpaper.mp4"
function Home() {
  return (
    <>
      <section>
        <div className="top-container" data-scroll-speed="-3" data-scroll-position="top">
          <video autoPlay muted loop src={LiveWallpaper}></video>
          <div className="wrapper top-heading">
            <div className="item item1">S</div>
            <div className="item item2">A</div>
            <div className="item item3">N</div>
            <div className="item item4">D</div>
            <div className="item item5">I</div>
            <div className="item item6">P</div>
          </div>
        </div>
      </section>
      <div className="home-box mb-3 ">
        <div>
          <h4>Bridging the gap between raw data and actionable intelligence.I am a Computer Science Engineer specializing in building end-to-end Data Science pipelines—from automated data collection with Python to deploying predictive models in the cloud. Currently focused on NLP and Assistant AI.</h4>
        </div>
        <div>
          {/* <p>The combination of my passion for design, code & interaction positions me in a unique place in the web design world. </p> */}
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <ul>
          <li>
            <a href="mailto:sandipadak000@gmail.com" target="_blank" rel="noopener noreferrer"  className="btn "> {" "} sandipadak000@gmail.com{" "}</a>
          </li>
          <li>
            <a href="https://wa.me/9134460122"  target="_blank" rel="noopener noreferrer" className="btn " > {" "} +91 9134460122{" "}</a>
          </li>
          </ul>
        </div>
        <div className="contact-circle "><a className="circle email-link" href="#contact">Contact Me</a></div>
      </div>
    </>
  );
}

export default Home;
