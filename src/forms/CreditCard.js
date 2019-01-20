import React from "react"
import StatusForm from "./StatusForm";
import visa from "../logos/visa.svg"
import mastercard from "../logos/mastercard.svg"
import maestro from "../logos/maestro.svg"
import "./CreditCard.css"

class CreditCard extends StatusForm {
  path = '/credit-card';

  form = (
    <form id="credit-card-content" onSubmit={this.handleSubmit}>
      <div id="card-info">
        <div>
          <img alt="" className="credit-card-logo" src={visa}/>
          <img alt="" className="credit-card-logo" src={mastercard}/>
          <img alt="" className="credit-card-logo" src={maestro}/>
          <input required id="card-number" placeholder="Номер карты"
                 pattern="[0-9]{16}" name="cardNumber"/>
          <input required pattern="([0-9]|0[0-9]|1[0-2])\/[1-9][0-9]"
                 id="card-expiration" placeholder="ММ/ГГ" name="expirationDate"/>
          <input required pattern="[0-9]{3}"
                 id="card-cvc" placeholder="CVC" name="CVC"/>
        </div>
      </div>
      <div id="other-info">
        <div className="labels">
          <label htmlFor="money-amount">Сумма</label>
          <input required placeholder="от 1 000 до 75 000 ₽" name="money"
                 pattern="([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)"/>
          <label htmlFor="comment">Комментарий</label>
          <input pattern=".{0-150}" placeholder="до 150 символов" name="comment"/>
          <label htmlFor="input-mail">Ваша эл.почта</label>
          <input required pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+"
                 placeholder="для квитанций об оплате" name="email"/>
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