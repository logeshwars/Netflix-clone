import React, { useEffect, useState } from "react";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import { useDataLayerValue } from "../DataLayer";
import {
  AddRounded,
  KeyboardArrowDownOutlined,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
function PopUp({ pop, top, left }) {
  const [{ genre }, dispatch] = useDataLayerValue();
  const [currentGenre, setCurrentGenre] = useState([]);
  let gn = genre;
  useEffect(() => {
    setCurrentGenre(
      gn.filter((elem) => pop.genre_ids.find((id) => elem.id === id))
    );
  }, []);

  return (
    <div
      className="popUp"
      style={{ left: left * 0.9, top: top }}
      onMouseOut={() => {
        dispatch({ type: "SET_POPUP", movie: null });
      }}
      onWheel={() => {
        dispatch({ type: "SET_POPUP", movie: null });
      }}
    >
      <img
        className="popUpImage"
        src={`https://image.tmdb.org/t/p/original${pop.backdrop_path}`}
        alt=""
      />
      <div className="columnRow">
        <div className="columnLeft">
          <div className="columnButtons">
            <button className="columnButtonsIcons">
              <PlayIcon className="columnIc" />
            </button>
            <button className="columnButtonsIcons">
              <AddRounded className="columnIc" />
            </button>
            <button className="columnButtonsIcons">
              <ThumbUpOutlined className="columnIc" />
            </button>
            <button className="columnButtonsIcons">
              <ThumbDownAltOutlined className="columnIc" />
            </button>
          </div>
          <div className="columnButtons">
            <button className="columnButtonsIcons">
              <KeyboardArrowDownOutlined className="columnIc" />
            </button>
          </div>
        </div>
        <div className="columns">
          <span>98% Match</span>
          <span>{!pop.adult ? "18+" : "13+"}</span>
        </div>
        {currentGenre && (
          <div className="popGenre">
            <ul>
              {currentGenre.map((cg) => (
                <li>{cg.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopUp;
