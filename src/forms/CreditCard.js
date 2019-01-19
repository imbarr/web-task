import React from "react"
import StatusForm from "./StatusForm";
import Input from "./Input"
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
          <Input id="card-number" placeholder="Номер карты"
                 check={v => /^[0-9]{0,16}$/.test(v)}
                 display={v => v.replace(/(.{4})/g,"$1 ")}
                 isValid={v => /^[0-9]{16}$/.test(v)} name="cardNumber"/>
          <Input check={v => /^(([0-9]|0[0-9]|1[0-2])(\/([1-9][0-9]?)?)?)?$/.test(v)}
                 isValid={v => /^([0-9]|0[0-9]|1[0-2])\/[1-9][0-9]$/.test(v)}
                 id="card-expiration" placeholder="ММ/ГГ" name="expirationDate"/>
          <Input check={v => /^[0-9]{1,3}$/.test(v)}
                 isValid={v => /^[0-9]{3}$/.test(v)}
                 id="card-cvc" placeholder="CVC" name="CVC"/>
        </div>
      </div>
      <div id="other-info">
        <div className="labels">
          <label htmlFor="money-amount">Сумма</label>
          <Input required placeholder="от 1 000 до 75 000 ₽" name="money"
                 check={(v) => /^[0-9]{0,5}$/.test(v)}
                 isValid={(v) => CreditCard.range(parseInt(v), 1000, 75000)}
                 display={(v) =>
                   (v.length > 3
                     ? v.substring(0, v.length-3) + " " + v.substring(v.length-3, v.length) + " ₽"
                     : v + " ₽")}/>
          <label htmlFor="comment">Комментарий</label>
          <input pattern=".{0,150}" type="text" placeholder="до 150 символов" name="comment"/>
          <label htmlFor="input-mail">Ваша эл.почта</label>
          <input required type="email" placeholder="для квитанций об оплате" name="email"/>
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