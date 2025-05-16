import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/EEXimium" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yagizefeatasever/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>So yeah, this is my portfolio. Hope you like it.</p>
    </footer>
  );
}

export default Footer;