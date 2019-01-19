import React from "react";
import "./Social.css"

function Social(props) {
  return (
    <a className="social"
       target="_blank"
       rel="noopener noreferrer"
       href={props.href}>
      <img alt="" src={props.image}/>
      {props.text}
    </a>
  )
}

export default Social;