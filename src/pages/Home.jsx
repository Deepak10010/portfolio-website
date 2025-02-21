import { Link } from "react-router-dom";
import "../assets/styles/Portfolio.css"; // Ensure correct path to your CSS

export default function Home() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-3 fw-bold">Welcome to My Portfolio</h1>
      <p className="lead">I am a passionate developer specializing in software testing, data science, and automation.</p>
      
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/about" className="btn btn-primary">About Me</Link>
        <Link to="/projects" className="btn btn-info">My Projects</Link>
        <Link to="/contact" className="btn btn-dark">Contact Me</Link>
      </div>

      <section className="mt-5">
        <h2 className="display-5 fw-bold">My Work</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-lg border-0 bg-dark text-light">
              <div className="card-body">
                <h5 className="card-title text-info">Automation Framework</h5>
                <p className="card-text">Built robust API/UI automation frameworks using Playwright and Cucumber.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg border-0 bg-dark text-light">
              <div className="card-body">
                <h5 className="card-title text-info">Data Engineering Pipeline</h5>
                <p className="card-text">Developed real-time analytics pipelines using Kafka, Airflow, and Spark.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg border-0 bg-dark text-light">
              <div className="card-body">
                <h5 className="card-title text-info">E-commerce App</h5>
                <p className="card-text">Built a scalable e-commerce application using the MERN stack.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
