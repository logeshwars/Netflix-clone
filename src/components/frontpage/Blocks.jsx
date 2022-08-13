import React from "react";
import "./Blocks.css";
function Blocks() {
  return (
    <div className="blocks">
      <div className="block">
        <div>
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <img src="images/tv.png" alt="" />
        {/* <div class="our-story-card-animation">
          <video
            class="our-story-card-video"
            autoplay="true"
            playsinline=""
            muted=""
            controls
            loop=""
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div> */}
      </div>

      <div className="block">
        <img src="images/mobile-0819.jpg" alt="" />
        <div>
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <div className="block">
        <div>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <img src="images/device-pile.png" alt="" />
      </div>
      <div className="block">
        <img src="images/chilldren.png" alt="" />
        <div>
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
