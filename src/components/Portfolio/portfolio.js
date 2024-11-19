import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src="/public/img/portfolio.jpg"
              alt="Project"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/public/img/portfolio2.jpg"
              alt="Project"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
