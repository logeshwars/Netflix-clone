import React, { useEffect, useState } from "react";
import getList from "../api/axios";
import "./Banner.css";
import { PlayArrow } from "@material-ui/icons/";
import InfoIcon from "@material-ui/icons/Info";

function Banner({ list }) {
  const [banner, setBanner] = useState();
  useEffect(() => {
    getList.get(list).then((response) => {
      setBanner(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1))
        ]
      );
    });
  }, []);
const ellipsis=(textContent)=>{

  if(textContent.length > 150){ 
  return(textContent.substr(0,150)+"...")
  }
  else
  return (textContent)
}
  return (
    <div className="banner">
      <div className="bannerImage">
        <img
          src={
            banner &&
            `https://image.tmdb.org/t/p/original${banner.backdrop_path}`
          }
        />
      </div>
      {banner && (
        <div className="bannerInfo">
          <div>
            <h1>{banner.name ? banner.name : banner.title}</h1>
            <p>{ellipsis(banner.overview)}</p>
            <div>
              {" "}
              <button>
                <PlayArrow style={{ fill: "black", marginRight: "3px" }} /> Play
              </button>
              <button>
                <InfoIcon style={{ marginRight: "3px" }} />
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
