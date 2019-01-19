import React from "react"
import "./CompanyInfo.css"

function CompanyInfo(props) {
  return (
    <div id="header-wrapper">
      <h1>{props.companyName}</h1>
      <p id="telephone">{props.telephone}</p>
      <a target="_blank" rel="noopener noreferrer" id="website" href={props.website.href}>
        {props.website.name}
      </a>
      <a target="_blank" rel="noopener noreferrer" id="mail" href={"mailto:" + props.mail}>
        {props.mail}
      </a>
      <a target="_blank" rel="noopener noreferrer" id="company-info" href={props.info}>
        Информация о компании
      </a>
      <a target="_blank" rel="noopener noreferrer" id="requisites" href={props.requisites}>
        Показать реквизиты
      </a>
    </div>
  )
}

export default CompanyInfo;