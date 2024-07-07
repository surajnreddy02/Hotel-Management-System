import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/branding" className="link link-hover">Branding</Link>
        <Link to="/design" className="link link-hover">Design</Link>
        <Link to="/marketing" className="link link-hover">Marketing</Link>
        <Link to="/advertisement" className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/services" className="link link-hover">Services</Link>
        {/* <Link to="/jobs" className="link link-hover">Jobs</Link> */}
        {/* <Link to="/press-kit" className="link link-hover">Press kit</Link> */}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms-of-use" className="link link-hover">Terms of use</Link>
        <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
        <Link to="/cookie-policy" className="link link-hover">Cookie policy</Link>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
