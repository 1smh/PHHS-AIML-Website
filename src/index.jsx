import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  body, html {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #e6f0ff;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    flex-grow: 1;
  }

  header {
    background-color: #0056e6;
    color: white;
    padding: 1rem 0;
    transition: background-color 0.3s ease;
  }

  header:hover {
    background-color: #004080;
  }

  nav {
    background-color: #1a75ff;
    padding: 0.5rem 0;
    height: 60px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  nav ul li {
    margin: 0 1rem;
  }

  nav ul li a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      position: relative;
      transition: color 0.12s ease;
  }

  nav ul li a:hover {
      color: #b3d1ff;
  }

  nav ul li a::before,
  nav ul li a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid transparent;
      box-sizing: border-box;
  }

  nav ul li a::before {
      border-right-color: #b3d1ff;
      border-top-color: #b3d1ff;
      transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
  }

  nav ul li a::after {
      border-left-color: #b3d1ff;
      border-bottom-color: #b3d1ff;
      transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s, height 0.1s ease-out 0.3s;
  }

  nav ul li a:hover::before {
      width: 0;
      height: 0;
      transition: width 0.1s ease-out 0.3s, height 0.1s ease-out 0.2s;
  }

  nav ul li a:hover::after {
      border-color: #b3d1ff;
      width: 0;
      height: 0;
      transition: border-color 0s ease-out, width 0.1s ease-out 0.1s, height 0.1s ease-out;
  }

  main {
    padding: 2rem 0;
    flex-grow: 1;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  footer {
    background-color: #0056e6;
    color: white;
    text-align: center;
    padding: 1rem 0;
    transition: background-color 0.3s ease;
    margin-top: auto;
  }

  footer:hover {
    background-color: #003cb3;
  }

  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  button {
    background-color: #0056e6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #003cb3;
    transform: scale(1.05);
  }
`;

const Header = () => (
  <header>
    <div className="container">
      <h1>PHHS AIML Club</h1>
      <p>Piedmont Hills AI and Machine Learning</p>
    </div>
  </header>
);

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/officers">Officers</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2024 PHHS AIML Club. All rights reserved.</p>
    </div>
  </footer>
);

const Home = () => (
  <div className="container">
    <h2>Welcome to PHHS AIML Club</h2>
    <p>Explore the fascinating world of AI and Machine Learning with us!</p>
    <div className="grid">
      <div className="card">
        <h3>Latest and Upcoming Events</h3>
        <ul>
          <li>First Official Meeting - TBD</li>
          <li>Officer Meeting - September 21, 2024</li>
          <li>Club Logisitics Meeting - August 17, 2024</li>
        </ul>
      </div>
      <div className="card">
        <h3>Latest News</h3>
        <ul>
          <li>None</li>
        </ul>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="container">
    <h2>Our Projects</h2>
    <div className="grid">
      <div className="card">
        <h3>Brawl Stars AI</h3>
        <p>An AI app which can predict various Brawl Stars statistics of a player using Scikit and PyQt5.</p>
      </div>
      <div className="card">
        <h3>N-gram Processing Tool</h3>
        <p>A tool that analyzes and processes frequencies of words in various human languages using Google API.</p>
      </div>
      <div className="card">
        <h3>Computer Vision Object Detection</h3>
        <p>An application that detects and classifies objects in images and video using OpenCV.</p>
      </div>
    </div>
  </div>
);

const Officers = () => (
  <div className="container">
    <h2>Club Officers</h2>
    <div className="grid">
      <div className="card">
        <h3>Rikhil Tanugula</h3>
        <p>President</p>
      </div>
      <div className="card">
        <h3>Chris Lee</h3>
        <p>Vice President</p>
      </div>
      <div className="card">
        <h3>Bradley Yang</h3>
        <p>Secretary</p>
      </div>
      <div className="card">
        <h3>Daniel Meilhon</h3>
        <p>Treasurer</p>
      </div>
      <div className="card">
        <h3>Sebastian Tsai</h3>
        <p>Publicist</p>
      </div>
    </div>
    <h2>Club Advisors</h2>
    <div className="grid">
      <div className="card">
        <h3>Regina Sevilla</h3>
        <p>Advisor</p>
      </div>
      <div className="card">
        <h3>Joselito Sevilla</h3>
        <p>Advisor</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="container">
    <h2>About PHHS AIML Club</h2>
    <div className="card">
      <p>The Piedmont Hills AI and Machine Learning Club (PHHS AIML) is dedicated to exploring and advancing the fields of artificial intelligence and machine learning. Our club provides a platform for students to learn, collaborate, and innovate in these cutting-edge technologies.</p>
      <h3>Our Mission</h3>
      <p>To foster a community of AI and ML enthusiasts, promote learning and innovation, and prepare our members for future careers in these rapidly growing fields.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-primary-600 mb-6">Contact Us</h2>
    <div className="card bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div className="flex items-center">
          <span className="text-lg text-primary-500 hover:text-primary-700 transition-colors">
            Instagram:&nbsp;
          </span>
          <a 
            href="https://www.instagram.com/phhsaiml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 text-lg text-primary-500 hover:text-primary-700 transition-colors"
          >
            @phhsaimlclub
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-lg text-primary-500 hover:text-primary-700 transition-colors">
            Discord:&nbsp;
          </span>
          <a 
            href="https://discord.gg/3eYaetbPUb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 text-lg text-primary-500 hover:text-primary-700 transition-colors"
          >
            Join our Discord server
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-lg text-primary-500 hover:text-primary-700 transition-colors">
            Email:&nbsp;  
          </span>
          <span className="ml-2 text-lg text-gray-700">phhsaimlclub@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <div className="app-container">
      <style>{styles}</style>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

// Required to render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);