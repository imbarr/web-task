import React from "react"
import "./About.css"

function About(props) {
  return (
    <div id="about">
      <h2>{"О компании " + props.companyName}</h2>
      <div className="gallery">
        {props.items.map((item, i) =>
          <div className="gallery-item">
            <img src={item.image} alt="Изображение не найдено."/>
            <p className="name">{item.name}</p>
            <p className="price">{item.price}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default About