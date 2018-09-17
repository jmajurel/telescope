import React from 'react';
import './Footer.css';

const Footer = props => ((
  <footer>
    <p>Web App created by <a href="mailo:jeanfelix.majurel@gmail.com">JF Majurel</a></p>
    <div className="contact">
      <a href="https://www.linkedin.com/in/jean-félix-majurel-a142235a"><i className="fab fa-linkedin"></i></a>
      <a href="https://github.com/jmajurel"><i className="fab fa-github"></i></a>
    </div>
    <p>This website is powered by the NASA API</p> 
  </footer>
));

export default Footer;
