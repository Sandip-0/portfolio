import React from "react";
import "./css/About.css";
import img22 from "./assets/img22.jpg";
import img23 from "./assets/img23.jpg";
function About() {
  return (
    <div className="m-3">
      <div className="d-flex">
        <div>
          <h2>
            I am a Computer Science Engineering student. My passion lies in the 'DS Journey'—taking raw, unstructured data and engineering it into something useful. Whether it's building a voice assistant or optimizing a database, I thrive on the logic of code and the power of data.
          </h2>
          <p>Always exploring</p>
        </div>
        <div><img className='about-img23' src={img23}  alt="" srcset="" /></div>
      </div>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div>
                <h1>Data Analysis</h1>
              </div>
              <div>
                <p>
                  I use Python, Pandas, and Matplotlib to find patterns in data. I don't just make graphs; I tell stories that help solve technical problems.
                </p>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>AI & Automation</h1>
              </div>
              <div>
                <p>
                 Creator of Jarvis-AI. I specialize in Python automation, Speech Recognition, and building tools that make human-computer interaction seamless.
                </p>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>MLOps</h1>
              </div>
              <div>
                <p>
                  I bridge the gap between a local script and a live site. I use GitHub and Vercel to ensure my AI models are fast, responsive, and ready for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
      <div><img className='about-img22' src={img22}  alt="" srcset="" /></div>
        <div>
          <h2>
            My approach to Data Science is rooted in my Computer Science background. I don't just "run models"—I focus on the entire lifecycle: from efficient data collection and rigorous cleaning to selecting the right mathematical algorithms. My work on projects like DS_Journey and Jarvis-AI has taught me that a model is only as good as the data it's fed and the environment it lives in. I am committed to building transparent, high-performance AI solutions that solve real-world problems.
          </h2>
          <p>Always exploring</p>
        </div>
      </div>
    </div>
  );
}

export default About;
