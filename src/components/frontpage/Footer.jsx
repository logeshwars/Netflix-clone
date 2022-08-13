import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <h3>Questions? Call 000-800-040-1843</h3>
      <div className="footerContent">
        <div>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Help Centre</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Media Centre</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbarSelectContain">
        <select className="navabarSelect">
          <option>English</option>
        </select>
      </div>
      <span>Netflix India</span>
    </div>
  );
}

export default Footer