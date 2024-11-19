import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
