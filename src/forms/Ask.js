import React from "react"
import StatusForm from "./StatusForm";
import Input from "./Input"

class Ask extends StatusForm {
  path = '/ask';

  form = (
    <form id="ask" className="content-2">
      <div className="labels">
        <label htmlFor="account-number">Номер счета</label>
        <Input check={v => /^[0-9]{0,20}$/.test(v)}
               isValid={v => /^[0-9]{20}$/.test(v)}
               placeholder="20 цифр" name="accountNumber"/>
        <label htmlFor="telephone-number">Номер телефона</label>
        <Input check={v => /^[0-9]{0,11}$/.test(v)}
               isValid={v => /^[0-9]{11}$/.test(v)}
               name="telephone"
               placeholder="88005553535"/>
      </div>
      <button type="submit">Создать платеж</button>
    </form>
  )
}

export default Ask