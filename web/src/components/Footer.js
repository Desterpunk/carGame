import React from "react";

import '../styles/Footer.css'

  
const Footer = () => {
  return (
    <>

          <div className="footer-basic">
              <footer>
                  <div className="social"><a href="/"><i className="icon ion-social-instagram"></i></a><a href="/"><i className="icon ion-social-snapchat"></i></a><a href="/"><i className="icon ion-social-twitter"></i></a><a href="/"><i className="icon ion-social-facebook"></i></a></div>
                  <ul className="list-inline">
                      <li className="list-inline-item"><a href="/">Home</a></li>
                      <li className="list-inline-item"><a href="/game">Game</a></li>
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