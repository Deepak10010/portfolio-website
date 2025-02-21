import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";  // Use Home.jsx instead of Portfolio.jsx
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <header className="bg-dark text-light py-3">
        <nav className="container d-flex justify-content-between">
          <h1 className="fw-bold">MY PORTFOLIO</h1>
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-dark text-center text-light py-3">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </Router>
  );
}
