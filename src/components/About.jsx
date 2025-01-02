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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            fugit eveniet assumenda autem unde numquam nesciunt vel pariatur,
            perspiciatis maxime enim magnam quam quaerat dolorum. Eveniet, id
            debitis explicabo placeat odio consectetur nesciunt et sequi aliquid
            dolores nostrum quo itaque, quidem exercitationem possimus autem
            deserunt fugit vitae quas aliquam! Illum.
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
                <h1>Design</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  eligendi maxime exercitationem quidem, molestiae veniam
                  suscipit adipisci, ea non beatae porro molestias possimus
                  nulla. Ipsa, rem adipisci sapiente deserunt ea, sed soluta
                  eveniet omnis quasi nemo possimus reprehenderit itaque? Nam
                  quaerat unde voluptates voluptatibus maiores.
                </p>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>Development</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  eligendi maxime exercitationem quidem, molestiae veniam
                  suscipit adipisci, ea non beatae porro molestias possimus
                  nulla. Ipsa, rem adipisci sapiente deserunt ea, sed soluta
                  eveniet omnis quasi nemo possimus reprehenderit itaque? Nam
                  quaerat unde voluptates voluptatibus maiores.
                </p>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>The full pakage</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  eligendi maxime exercitationem quidem, molestiae veniam
                  suscipit adipisci, ea non beatae porro molestias possimus
                  nulla. Ipsa, rem adipisci sapiente deserunt ea, sed soluta
                  eveniet omnis quasi nemo possimus reprehenderit itaque? Nam
                  quaerat unde voluptates voluptatibus maiores.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            fugit eveniet assumenda autem unde numquam nesciunt vel pariatur,
            perspiciatis maxime enim magnam quam quaerat dolorum. Eveniet, id
            debitis explicabo placeat odio consectetur nesciunt et sequi aliquid
            dolores nostrum quo itaque, quidem exercitationem possimus autem
            deserunt fugit vitae quas aliquam! Illum.
          </h2>
          <p>Always exploring</p>
        </div>
      </div>
    </div>
  );
}

export default About;
