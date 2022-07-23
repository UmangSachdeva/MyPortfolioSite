import React from "react";
import "./AboutMe.css";
import image1 from "../Resources/SVG/character 6.svg";
import pdf from "../Resources/UMANG SACHDEVA.pdf";

function AboutMe() {
  return (
    <div>
      <div className="container container-AboutMe">
        <div className="Head">
          <fieldset className="border border-4 p-2">
            <legend className="float-none w-auto p-2">
              <h2 className="sec2-heading heading-AboutMe">About Me</h2>
            </legend>
          </fieldset>
        </div>
        <div className="body">
          <section className="Section-one">
            <img src={image1} alt="" className="imageCustom" />
          </section>
          <section className="Section-two ">
            <p>
              Hi! I am a frontend developer and a B.tech student from Guru
              Gobind Singh Inderprastha university. I am a passinate web
              developer and a 5 Star coder on HackerRank. I know various
              technologies such as HTML, CSS, JavaScript. Frameworks like
              bootstrap and ReactJs is also familiar to me.
            </p>
            <div className="skill">
              <h3 className="custom-text">My Skill Set</h3>
              <ul className="custom-list">
                <li>HTML</li>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <li>CSS</li>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <li>JavaScript</li>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <li>C++</li>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <li>Bootstrap</li>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <li>ReactJs</li>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </ul>
            </div>
            <div className="links">
              <div className="links-social">
                <h4 className="custom-text">My Socials</h4>
                <div className="link1">
                  <a type="button" class="btn-links btn btn-outline ">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a
                    type="button"
                    class="btn-links btn btn-outline "
                    href="https://www.linkedin.com/in/umang-sachdeva-66aa82220/"
                    target="_blank"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a
                    type="button"
                    class="btn-links btn btn-outline "
                    href="https://github.com/KINGCODDER"
                    target="_blank"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="links-resume">
                <h4 className="custom-text">Download My Resume</h4>

                <a
                  class="btn btn-resume rounded-0"
                  href={pdf}
                  download={"Umang Sachdeva Resume"}
                  role="button"
                >
                  <i className="bi bi-file-earmark-person">{"  "}MY RESUME</i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
