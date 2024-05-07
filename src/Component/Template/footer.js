import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          {/* Footer Widget */}
          <div className="col-12 col-lg-5">
            <div className="footer-widget-area border-end pe-lg-4 me-lg-4">
              <NavLink className="d-block mb-4" to="/">
              </NavLink>
              
              {/* Social Icon */}
              <h5>Join the community</h5>
              <div className="footer-social-icon">
                <a><img src="img/core-img/icons8-facebook.svg" alt="Facebook" /></a>
                <a><img src="img/core-img/icons8-twitter.svg" alt="Twitter" /></a>
                <a><img src="img/core-img/icons8-instagram.svg" alt="Instagram" /></a>
                <a><img src="img/core-img/icons8-slack.svg" alt="Slack" /></a>
                <a><img src="img/core-img/icons8-player.svg" alt="Youtube" /></a>
              </div>
            </div>
          </div>
          {/* End Footer Widget */}
          {/* Footer Widget */}
          <div className="col-12 col-lg-7">
            <div className="row g-4">
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area">
                  <h5>Explore</h5>
                  <ul>
                    <li><NavLink to="/nft/view">NFT's</NavLink></li>
                    <li><NavLink to="/nft/createnew">Mint a NFT</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area">
                  <h5>Collections</h5>
                  <ul>
                    <li><NavLink to="/collection/view">Collections</NavLink></li>
                    <li><NavLink to="/collection/createnew">Drop a Collection</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
