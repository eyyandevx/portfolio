import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            muhammad Eyyan ahmad
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Hi, i am eyyan</h1>
          <p className="lead">
            Frontend Developer | Web Designer | Freelancer
          </p>
          <a href="#projects" className="btn btn-light btn-lg mt-3">
            View My Work
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container text-center">
          <h2 className="mb-4">About Me</h2>
          <p className="w-75 mx-auto">
            I am a passionate web developer skilled in building responsive and
            interactive websites using HTML5, CSS3, Bootstrap, and JavaScript.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="mb-5">My Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <h5>HTML5</h5>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "90%" }}>
                  90%
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h5>CSS3</h5>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "85%" }}>
                  85%
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h5>Bootstrap 5</h5>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding">
        <div className="container text-center">
          <h2 className="mb-5">My Projects</h2>
          <div className="row g-4">
            {[1, 2, 3].map((item) => (
              <div className="col-md-4" key={item}>
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Project {item}</h5>
                    <p className="card-text">
                      Responsive website built using Bootstrap 5.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Contact Me</h2>
          <form className="w-75 mx-auto">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>

            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <div className="container">
          <p className="mb-0">
            © 2026 muhammad eyyan ahmad | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;