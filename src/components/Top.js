import React, { useState } from "react";
import "./Top.css";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Top() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  window.onscroll = () => {
    if (
      document.getElementById("top") &&
      document.documentElement.scrollTop >= 100
    ) {
      document.getElementById("top").style.backgroundColor = "rgb(19, 19, 19)";
    }
    if (
      document.getElementById("top") &&
      document.documentElement.scrollTop < 100
    )
      document.getElementById("top").style.backgroundColor = "transparent";
  };
  return (
    <div className="top" id="top">
      <div className="left">
        <img src="./logo.png" alt="" />
        <ul className="leftmenu">
          <li
            className="menuHolder"
            onClick={() => {
              if (!subMenu) setSubMenu(true);
              else setSubMenu(false);
            }}
            onMouseOut={() => setSubMenu(false)}
            onMouseOver={() => setSubMenu(true)}
          >
            <a href=" " className=" menu actives">
              Browse <ArrowDropDownIcon />
            </a>
            {subMenu && (
              <ul className="dropdown">
                <li>
                  <a href=" " className="actives subMenu">
                    Home
                  </a>
                </li>
                <li>
                  <a href=" " className="subMenu">
                    TV Shows
                  </a>
                </li>
                <li>
                  <a href=" " className="subMenu">
                    Movies
                  </a>
                </li>
                <li>
                  <a href=" " className="subMenu">
                    New & Popular
                  </a>
                </li>
                <li>
                  <a href=" " className="subMenu">
                    My List
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href=" " className="actives mainMenu">
              Home
            </a>
          </li>
          <li>
            <a href=" " className=" mainMenu">
              TV Shows
            </a>
          </li>
          <li>
            <a href=" " className=" mainMenu">
              Movies
            </a>
          </li>
          <li>
            <a href=" " className=" mainMenu">
              New & Popular
            </a>
          </li>
          <li>
            <a href=" " className=" mainMenu">
              My List
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <a href=" " className=" mainMenu">
          Children
        </a>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div
          onClick={() => {
            if (!profileMenu) setProfileMenu(true);
            else setProfileMenu(false);
          }}
          onMouseLeave={() => setProfileMenu(false)}
          onMouseOver={() => setProfileMenu(true)}
        >
          <div>
            <img
              src="https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdQdIwRoXMJCv5Upof00xDO8csvhj6FjgEhyKjxuh5RSjj6ygXEyq3aFOF6LBgxv-DysTw4ja_3af39-wCT8Lmk.png?r=f79"
              alt=""
            />
            <ArrowDropDownIcon className=" mainMenu" />
            {profileMenu && (
              <ul className="profileMenu">
                <li>
                  
                  <a className="submenu withPimage">
                    
                    <img
                      src="https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdQdIwRoXMJCv5Upof00xDO8csvhj6FjgEhyKjxuh5RSjj6ygXEyq3aFOF6LBgxv-DysTw4ja_3af39-wCT8Lmk.png?r=f79"
                      alt=""
                    />
                    Children
                  </a>
                </li>
                <li>
                  
                  <a className="submenu"> Manage Profiles </a>
                </li>
                <hr />
                <li>
                  
                  <a className="submenu actives"> Account </a>
                </li>
                <li>
                  
                  <a className="submenu actives"> Help Centre </a>
                </li>
                <li>
                  
                  <a className="submenu actives"> Sign out Netflix </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
