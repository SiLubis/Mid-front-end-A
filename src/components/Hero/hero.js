import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-5 hero-section">
      <div className="container">
        <img
          src="assets/images/hero-bg.jpg"
          alt="Background"
          className="img-fluid hero-image"
        />
        <h1>Lubis Ebenezer</h1>
        <p>
          I'm a <span className="text-primary">Designer</span>
        </p>
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
