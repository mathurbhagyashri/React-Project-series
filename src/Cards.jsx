import React from "react";
import Imageicon from './Imageicon'
import Heading from "./Heading";

function Card(props) {
    // console.log(props);
    
    return (
      <div className="card">
        <div className="cards">
        <Imageicon imgsrc={props.imgsrc}/>
          <div className="card_info">
            <span className="card_category"> {props.title}</span>
            <Heading sname={props.sname}/>
            <a href={props.link} target="_blank">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
        <br/>
      </div>
    );
  }

  export default Card;