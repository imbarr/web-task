import React from "react"
import StatusForm from "./StatusForm";
import visa from "../logos/visa.svg"
import mastercard from "../logos/mastercard.svg"
import maestro from "../logos/maestro.svg"
import "./CreditCard.css"
import {Mail, Money} from "./Inputs";

class CreditCard extends StatusForm {
  path = '/payment';

  form = (
    <form id="credit-card-content" onSubmit={this.handleSubmit}>
      <div id="card-info">
        <div>
          <img alt="" className="credit-card-logo" src={visa}/>
          <img alt="" className="credit-card-logo" src={mastercard}/>
          <img alt="" className="credit-card-logo" src={maestro}/>
          <input required id="card-number" placeholder="Номер карты"
                 pattern="[0-9]{16}" name="cardNumber"/>
          <input required pattern="([0-9]|0[0-9]|1[0-2])\/19|[2-9][0-9]"
                 id="card-expiration" placeholder="ММ/ГГ" name="expirationDate"/>
          <input required pattern="[0-9]{3}"
                 id="card-cvc" placeholder="CVC" name="CVC"/>
        </div>
      </div>
      <div id="other-info">
        <div className="labels">
          <label htmlFor="card__money">Сумма</label>
          <Money id="card__money"/>
          <label htmlFor="card__comment">Комментарий</label>
          <input id="card__comment" pattern=".{0,150}" placeholder="до 150 символов" name="comment"/>
          <label htmlFor="card__mail">Ваша эл.почта</label>
          <Mail id="card__mail" placeholder="для квитанций об оплате"/>
        </div>
        <button type="submit">Заплатить</button>
      </div>
    </form>
  );

  static range(num, a, b) {
    return num >= a && num <= b
  }
}

export default CreditCard;