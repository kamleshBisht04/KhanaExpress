import "./Footer.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* LEFT SECTION */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="KhanaExpress Logo" />

          <p>
            KhanaExpress delivers fresh and delicious food at your doorstep. Fast delivery, secure
            payments, and best quality guaranteed.
          </p>

          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-link">
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-link">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>
              📞
              <a href="tel:+923084900522" className="footer-contact-link">
                +92-308-4900522
              </a>
            </li>

            <li>
              ✉
              <a href="mailto:contact@khanaexpress.com" className="footer-contact-link">
                contact@khanaexpress.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <hr />
      <p className="footer-copyright">&copy; {currentYear} KhanaExpress. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
