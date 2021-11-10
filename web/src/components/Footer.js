import React from "react";

import '../styles/Footer.css'

import { AiFillGithub,AiFillYoutube } from 'react-icons/ai';

  
const Footer = () => {
  return (
    <>

          <div className="footer-basic">
              <footer>
                  <div className="social">
                  <span>Jhon:</span><a href="https://github.com/Desterpunk"><AiFillGithub  size="2em" color="white" /></a>
                  <span>Andres:</span><a href="https://github.com/Andres0x90"><AiFillGithub  size="2em" color="white" /></a>
                  </div>
                  <ul className="list-inline">
                      <li className="list-inline-item"><a href="/">Home</a></li>
                      <li className="list-inline-item"><a href="/game">Game Config</a></li>
                      <li className="list-inline-item"><a href="/games">Games</a></li>
                  </ul>
                  <p className="copyright">Company Name © 2021</p>
              </footer>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

    </>
  );
};
export default Footer;