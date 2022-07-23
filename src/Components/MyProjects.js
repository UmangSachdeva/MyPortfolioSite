import React from "react";
import "./MyProjects.css";
import AboutMe from "./AboutMe";
import ScrollAnimation from "react-animate-on-scroll";
import image1 from "../Resources/19362653.jpg";
import image2 from "../Resources/ss1.png";
import image3 from "../Resources/ss2.png";
import image4 from "../Resources/ss3.png";
import image5 from "../Resources/ss4.png";
import image6 from "../Resources/ss5.png";
import image7 from "../Resources/8401.jpg";
import image8 from "../Resources/Web capture_3-7-2022_151935_localhost.jpeg";

function MyProjects() {
  return (
    <>
      <section className="sec1" id="home">
        <div className="container-2">
          <div className="text">
            <h1 className="heading">Umang Sacdeva</h1>
            <p className="role">Frontend Developer</p>
          </div>

          <h2 className="heading-2">
            Hey, There! I am a frontend Developer and a student of Guru Gobind
            Singh Inderprastha University.
          </h2>
        </div>
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section className="sec2 row" id="MyProject">
        <fieldset className="border border-4 p-2">
          <legend className="float-none w-auto p-2">
            <h2 className="sec2-heading" style={{ marginBottom: "0px" }}>
              MY PROJECTS
            </h2>
          </legend>
        </fieldset>

        <div className="container-3 col-6">
          <ScrollAnimation animateIn="bounceInLeft" duration={2}>
            <img src={image1} alt="" className="image1" />
          </ScrollAnimation>
        </div>
        <div className="container-4 col-6">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image2} className="d-block w-100" alt="/" />
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="/" />
              </div>
              <div className="carousel-item">
                <img src={image4} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={image5} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={image6} className="d-block w-100" alt="" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h3 className="Project-label">Property Leasing website</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi
            repellendus? Accusantium recusandae vero, voluptate at dignissimos
            temporibus nemo! Eligendi distinctio at perspiciatis libero sint
            ducimus voluptas corporis in enim?
          </p>
        </div>

        <div className="container-5">
          <img src={image8} alt="" />
          <h3 className="Project-label">Weather App</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi
            repellendus? Accusantium recusandae vero, voluptate at dignissimos
            temporibus nemo! Eligendi distinctio at perspiciatis libero sint
            ducimus voluptas corporis in enim?
          </p>
        </div>
        <div className="container-6">
          <ScrollAnimation animateIn="bounceInRight" duration={2}>
            <img src={image7} alt="/" />
          </ScrollAnimation>
        </div>
      </section>
      <section className="sec3 container">
        <fieldset className="border border-4 p-2">
          <legend className="float-none w-auto p-2">
            <h2 className="sec2-heading" style={{ marginBottom: "0px" }}>
              Let's Connect
            </h2>
          </legend>
        </fieldset>

        <form action="submit">
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="inputName">Name</label>
              <input
                name="inputName"
                type="text"
                className="form-control"
                aria-label="First name"
              />
            </div>
            <div className="col mb-3">
              <label htmlFor="inputEmail">Email</label>
              <input
                name="inputEmail"
                type="email"
                className="form-control"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <textarea
                class="form-control container"
                aria-label="With textarea"
                rows={10}
                placeholder="Any Suggestions...."
              ></textarea>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              class="btn btn-primary my-4 submit-btn"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </form>
      </section>
    </>
  );
}

export default MyProjects;
