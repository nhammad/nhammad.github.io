import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

export default function Greeting() {
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greeting.title}</h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <p className="greeting-text-p subTitle">{greeting.bio}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact Me" href="#contact" />
              <Button text="See My Resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="Neeha's Pic" src={require("../../assests/images/pic.png")}align="middle"></img>
        </div>
      </div>
    </div>
  );
}
