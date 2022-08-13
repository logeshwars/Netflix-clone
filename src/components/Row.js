import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import getList from ".././api/axios";
import { ArrowBackIos } from "@material-ui/icons/";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import Column from "./Column";
import { useDataLayerValue } from "../DataLayer";
function Row({ title, list }) {
  const [{ movie }, dispatch] = useDataLayerValue();
  const rowElement = useRef();
  const sendData = () => {
    let rect = rowElement.current.getBoundingClientRect();
    console.log( rect.left)
    setTimeout(()=>{dispatch({
      type: "SET_RECT",
      top: rect.top,
    });},1000)
    
  };
  let i = 0;
  let j = 0;
  const [shows, setShows] = useState([]);
  const slider = useRef(null);
  const leftArrow=useRef(null);
  const rightArrow=useRef(null);
  const showArrows=(state)=>{
    if(leftArrow.current)
    {
      switch(state){
        case "open":
          leftArrow.current.style.display = "block";
          rightArrow.current.style.display = "block";
          break;
        case "close":
          leftArrow.current.style.display = "none";
          rightArrow.current.style.display = "none";
          break;
      }
    }
        
      }
  useEffect(() => {
    getList.get(list).then((response) => {
      setShows(response.data.results);
    });
  }, []);
  const shamples = (event) => {};
  const handleClick = (side) => {
    if (side === "left") {
      i = i - 93;
    } else if (i != 0) i = i + 93;
    slider.current.style.transform = `translateX(${i}vw)`;
  };
  const scrollSlider = (event) => {
    console.log(event)
    if (j === 0) {
      j = 1;
      if (event.deltaX < 0 && i != 0) {
        i = i + 93;
      } else if (event.deltaX > 0) {
        i = i - 93;
      }
    }
    setTimeout(() => (j = 0), 2000);
    slider.current.style.transform = `translateX(${i}vw)`;
  };
  return (
    <div className="row" ref={rowElement} onMouseOver={()=>{showArrows("open"); sendData();}} onMouseOut={()=>showArrows("close")}>
      <h2>{title}</h2>
      <div className="slider">
        <button
          className="arrowLeft"
          ref={leftArrow}
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowBackIos className="mui" />
        </button>
        <div className="rowOuter">
          <div
            className="rowContainer"
            id="slider"
            onWheel={(event) => {
              scrollSlider(event);
            }}
            ref={slider}
          >
            {shows.map((movie) => (
              <Column column={movie} />
            ))}
          </div>
        </div>
        <button
          ref={rightArrow}
          className="arrowRight"
          onClick={() => {
            handleClick("right");
          }}
        >
          <ArrowForwardIosOutlined className="mui" />
        </button>
      </div>
    </div>
  );
}

export default Row;
