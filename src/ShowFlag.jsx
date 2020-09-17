import React from "react";

export default (props) => (
  <div className="card">
    <img
      src="http://bgfons.com/uploads/city/city_texture6381.jpg"
      alt="card background"
      className="card-img"
    />
    <img src={props.flag} alt="" className="profile-img" />
    <h1> {props.name} </h1>
    <p className="job-title"> {props.capital} </p>
    <a href onClick={props.OnChangeName} className="btn">
      Click To Change Title
    </a>
    <a href onClick={props.OnChangeFlag} className="btn">
      Click To Change Image
    </a>
    <ul className="social-media">
      <h3 style={{ position: "absolute", top: "2px" }}> Follow As </h3>
      <li>
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-square"></i>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/">
          <i className="fab fa-twitter-square"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://www.google.com/">
          <i className="fab fa-google-plus-square"></i>
        </a>
      </li>
    </ul>
  </div>
);
