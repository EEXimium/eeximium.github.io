import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Fastest way is here:</p>

          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/yagizefeatasever/"
            target="_blank"
            rel="noreferrer"
          >
            This is my LinkedIn Profile!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;