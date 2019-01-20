import React from "react"
import StatusForm from "./StatusForm";

class Ask extends StatusForm {
  path = '/ask';

  form = (
    <form id="ask" className="content-2">
      <div className="labels">
        <label htmlFor="account-number">Номер счета</label>
        <input pattern="[0-9]{20}"
               placeholder="20 цифр" name="accountNumber"/>
        <label htmlFor="telephone-number">Номер телефона</label>
        <input pattern="\+7[0-9]{11}"
               name="telephone"
               placeholder="+7 800 555 35 35"/>
      </div>
      <button type="submit">Создать платеж</button>
    </form>
  )
}

export default Ask