import React, { useRef } from "react";
import "./Column.css";
import { useDataLayerValue } from "../DataLayer";
function Column({ column }) {
  const [{ movie }, dispatch] = useDataLayerValue();
  const columnElement = useRef();
  const sendData = (m) => {
    let rect = columnElement.current.getBoundingClientRect();
    setTimeout(()=>{dispatch({
      type: "SET_POPUP",
      movie: column,
      left: rect.left,
    });},1000)
    
  };

  return (
    <div
      ref={columnElement}
      onMouseOver={(e) => {
        sendData();
      }}
      className="column"
      
    >
      <img src={`https://image.tmdb.org/t/p/original${column.backdrop_path}`}/>
    </div>
  );
}

export default Column;
