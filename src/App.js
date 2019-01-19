import React from "react";
import Social from "./Social"
import Info from "./Info"
import About from "./About"
import CompanyInfo from "./CompanyInfo"
import CreditCard from"./forms/CreditCard"
import InternetBank from "./forms/InternetBank"
import Ask from "./forms/Ask"

import creditCardBlue from "./icons/credit-card-blue.svg"
import bankBlue from "./icons/bank-blue.svg"
import twitter from "./logos/twitter.svg"
import facebook from "./logos/facebook.svg"
import google from "./logos/google.svg"
import vkontakte from "./logos/vkontakte.svg"
import odnoklassniki from "./logos/odnoklassniki.svg"
import linkedIn from "./logos/linkedin.svg"

import "./App.css"

function App(props) {
  return (
    <div>
      <header>
        <CompanyInfo {...props.info}/>
        <img id="avatar" src={props.avatar} alt="Изображение не найдено."/>
      </header>
      <main>
        <div id="payment" className="tabs">
          <input type="radio" name="tabs-level-1" className="tab-1" id="bank-tab" checked/>
          <label htmlFor="bank-tab">Заплатить</label>
          <input type="radio" name="tabs-level-1" className="tab-2" id="ask-tab"/>
          <label htmlFor="ask-tab">Запросить платеж</label>
          <div className="tab-content">
            <div id="bank" className="tabs content-1">
              <input type="radio" name="tabs-level-2" id="credit-card" className="tab-1" checked/>
              <label htmlFor="credit-card">
                <img alt="" src={creditCardBlue}/>
                С карты любого банка
              </label>
              <input type="radio" name="tabs-level-2" id="internet-bank" className="tab-2"/>
              <label htmlFor="internet-bank">
                <img alt="" src={bankBlue}/>
                Из своего интернет-банка
              </label>
              <div className="tab-content">
                <div className="content-1">
                  <CreditCard />
                </div>
                <div className="content-2">
                  <InternetBank/>
                </div>
              </div>
            </div>
            <div className="content-2">
              <Ask/>
            </div>
          </div>
        </div>
        <About companyName={props.info.companyName} items={props.items}/>
        <Info text={props.text}/>
      </main>
      <footer>
        <Social
          href="https://twitter.com/intent/tweet?text=Great+streamer.+Never+reads+chat+though.&amp;url=https%3A%2F%2Fwww.twitch.tv%2Fbobross"
          image={twitter}
          text="Твитнуть"
        />
        <Social
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.twitch.tv%2Fbobross&amp;src=sdkpreparse"
          image={facebook}
          text="Поделиться"
        />
        <Social
          href="https://google.com"
          image={google}
        />
        <Social
          href="https://vk.com"
          image={vkontakte}
        />
        <Social
          href="https://ok.ru"
          image = {odnoklassniki}
        />
        <Social
          href="https://www.linkedin.com"
          image={linkedIn}
        />
      </footer>
    </div>
  )
}

export default App;