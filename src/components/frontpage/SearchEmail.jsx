import React from 'react'
import { ArrowForwardIos } from "@material-ui/icons";
import "./SearchEmail.css"
function SearchEmail()
{
    return (
      <div className='searchEmail'>
        <h6 className="quote">
          Ready to watch? Enter your email to create or restart your membership.
        </h6>
        <div className="searchBoxContainer">
          <div class="searchBox">
            <input type="text" placeholder="Email address" />
          </div>
          <button>
            Get Started <ArrowForwardIos/>
          </button>
        </div>
      </div>
    );
}
export default SearchEmail;