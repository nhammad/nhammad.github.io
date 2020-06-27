import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  console.log("medium link",socialMediaLinks.medium )
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.github} className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href={`mailto:${socialMediaLinks.email}`} className="icon-button google" target="_blank">
        <i className="far fa-envelope"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.medium} className="icon-button medium" target="_blank">
      <i className="fab fa-medium-m"></i>
        <span></span>
      </a>
    </div>
  );
}
