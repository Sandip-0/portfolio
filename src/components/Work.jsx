import React from "react";
import "./css/Work.css";
import img1 from "./assets/img1.jpg";
// import img2 from "./assets/img2.jpg";


import work1 from "./assets/work1.mp4";
import work3 from "./assets/work3.mp4";
import work2 from "./assets/work2.mp4";
import work4 from "./assets/work4.mp4";
import work5 from "./assets/work5.mp4";
import work6 from "./assets/work6.mp4";
import work7 from "./assets/work7.mp4";
import work8 from "./assets/work8.mp4";
import work9 from "./assets/work9.mp4";
import work10 from "./assets/work10.mp4";
import work11 from "./assets/work11.mp4";
import work12 from "./assets/work12.mp4";
import work13 from "./assets/work13.mp4";
function Work() {
    return (
          <div className="work">
            <div className="d-flex justify-content-center align-items-center"><h1>Some Project</h1></div>
              <div className="d-flex justify-content-center flex-wrap">
                <div className="card">
                  <img src={img1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      <b>UltraEdit Clone</b>A sophisticated text and code editor clone featuring a multi-tab interface and syntax-friendly layout.
                    </p>
                  </div>
                </div>

                <div className="card" >
                  <video autoPlay muted loop src={work1}></video>
                  <div className="card-body">
                    <p className="card-text">
                      An analytical dashboard that transforms raw datasets into interactive visual insights using statistical plotting libraries.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work2}></video>
                  <div className="card-body">
                    <p className="card-text">
                      <b>Netflix Clone</b>A high-fidelity streaming service replica featuring dynamic content.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work3}></video>
                  <div className="card-body">
                    <p className="card-text">
                      <b>TextUtils</b>A React-based utility tool for real-time text manipulation, including case conversion, word counting, and extra space removal.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work4}></video>
                  <div className="card-body">
                    <p className="card-text">
                      <b>News App</b>A real-time news aggregator that fetches global headlines via API, categorized by business, tech, and sports.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work5}></video>
                  <div className="card-body">
                    <p className="card-text">
                      <b>MovieX</b>An immersive movie discovery platform with advanced search functionality and detailed media metadata.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work6}></video>
                  <div className="card-body">
                    <p className="card-text">
                     <b>FoodHub</b> A full-stack food delivery interface featuring menu filtering, cart management, and a streamlined checkout flow.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work7}></video>
                  <div className="card-body">
                    <p className="card-text">
                       <b>AI Assistant </b>	An intelligent conversational interface capable of processing user queries and providing context-aware responses.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work8}></video>
                  <div className="card-body">
                    <p className="card-text">
                     <b>BirthdayMsg</b> 	A personalized, interactive digital greeting card featuring custom animations and message.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work9}></video>
                  <div className="card-body">
                    <p className="card-text">
                    <b>CV</b>	A responsive, web-based professional resume designed for high readability and easy digital sharing.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work10}></video>
                  <div className="card-body">
                    <p className="card-text">
                      <b>Spotify clone</b> A high-fidelity streaming service replica featuring dynamic content 
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work11}></video>
                  <div className="card-body">
                    <p className="card-text">
                      Some Animation visually driven landing page showcasing eco-tourism and nature photography with a focus on modern UI.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work12}></video>
                  <div className="card-body">
                    <p className="card-text">
                      <b>FlightBook</b>	A travel booking conceptual UI focused on user experience, date selection, and flight scheduling.
                    </p>
                  </div>
                </div>
                <div className="card" >
                  <video autoPlay muted loop src={work13}></video>
                  <div className="card-body">
                    <p className="card-text">
                    <b>NatureX</b> 	A visually driven landing page showcasing eco-tourism and nature photography with a focus on modern UI.
                    </p>
                  </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">...</div>
        </div>
    );
}

export default Work;
