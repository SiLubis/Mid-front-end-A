import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about py-5">
      <div className="container">
        <h2>About Me</h2>
        <ul>
          <li>
            <strong>Name:</strong> Ebenezer Lubis
          </li>
          <li>
            <strong>Gender:</strong> Male
          </li>
          <li>
            <strong>Date of Birth:</strong> Pangambatan, 2000-09-24
          </li>
          <li>
            <strong>Religion:</strong> Kristen Advent
          </li>
          <li>
            <strong>Race:</strong> Batak
          </li>
          <li>
            <strong>Residence:</strong> Bekasi
          </li>
          <li>
            <strong>Address:</strong> Jl. Bintara 8 No. 149 RT.005/RW.003,
            Kelurahan Bintara, Bekasi Barat, Kota Bekasi, Jawa Barat, Indonesia
          </li>
          <li>
            <strong>Marital Status:</strong> Single
          </li>
          <li>
            <strong>Faculty:</strong> Fakultas Ilmu Komputer
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet lacus ut augue convallis, vitae auctor felis lacinia.
        </p>
        <img
          src="assets/images/profile-img.jpg"
          alt="Profile"
          className="img-fluid mt-3"
        />
      </div>
    </section>
  );
}
