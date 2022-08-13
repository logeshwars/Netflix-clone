import React from 'react'
import "./Footer.css"
import {Instagram} from '@material-ui/icons/';
import  {Facebook}  from '@material-ui/icons/';
import  {Twitter}  from '@material-ui/icons/';
import { YouTube } from '@material-ui/icons/';

function Footer() {
    return (
      <div className="footer">
        <div className="icons">
          <a href="">
            <Facebook
              className="mui"
              style={{
                color: "rgb(155, 154, 154)",
              }}
            />
          </a>
          <a href="">
            <Instagram
              className="mui"
              style={{
                color: "rgb(155, 154, 154)",
              }}
            />
          </a>
          <a href="">
            <Twitter
              className="mui"
              style={{
                color: "rgb(155, 154, 154)",
              }}
            />
          </a>
          <a href="">
            <YouTube
              className="mui"
              style={{
                color: "rgb(155, 154, 154)",
              }}
            />
          </a>
        </div>
        <div className="footerSection2">
          <div>
            <a href=" ">Audio and Subtitles</a>
            <a href=" ">Media Centre</a>
            <a href=" ">Privacy</a>
            <a href=" ">Contact Us</a>
          </div>
          <div>
            <a href=" ">Audio Describtion</a>
            <a href=" ">Investor Relations</a>
            <a href=" ">Legal Notices</a>
          </div>
          <div>
            <a href=" ">Help Centre</a>
            <a href=" ">Jobs</a>
            <a href=" ">Cookie Prefrences</a>
          </div>
          <div>
            <a href=" ">Gift Cards</a>
            <a href=" ">Terms of Use</a>
            <a href=" ">Corporate Information</a>
          </div>
        </div>
        <div>
          <button className="service">Service Code</button>
          <p>© 1997-2021 Netflix, Inc.</p>
        </div>
      </div>
    );
}
export default Footer
