import React from "react";

import '../styles/Footer.css'

  
const Footer = () => {
  return (
    <>
      <body>
          <div class="footer-basic">
              <footer>
                  <div class="social"><a href="/"><i class="icon ion-social-instagram"></i></a><a href="/"><i class="icon ion-social-snapchat"></i></a><a href="/"><i class="icon ion-social-twitter"></i></a><a href="/"><i class="icon ion-social-facebook"></i></a></div>
                  <ul class="list-inline">
                      <li class="list-inline-item"><a href="/">Home</a></li>
                      <li class="list-inline-item"><a href="/game">Game</a></li>
                  </ul>
                  <p class="copyright">Company Name © 2021</p>
              </footer>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </body>
    </>
  );
};
export default Footer;