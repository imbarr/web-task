import React from "react"
import StatusForm from "./StatusForm";
import {AccountNumber, BIC, Mail, Money, TaxId, Telephone, VAT} from "./Inputs";

class Ask extends StatusForm {
  path = '/request';

  form = (
    <form id="ask" className="content-2">
      <div className="labels">
        <label htmlFor="ask__tax-id">ИНН получателя</label>
        <TaxId id="ask__tax-id"/>
        <label htmlFor="ask__bic">БИК</label>
        <BIC id="ask__bic"/>
        <label htmlFor="ask__account">Номер счета</label>
        <AccountNumber id="ask__account"/>
        <label htmlFor="ask__vat">НДС</label>
        <VAT id="ask__vat"/>
        <label htmlFor="ask__money">Сколько</label>
        <Money id="ask__money"/>
        <label htmlFor="ask__telephone">Номер телефона</label>
        <Telephone id="ask__telephone"/>
        <label htmlFor="ask__mail">Почта</label>
        <Mail id="ask__mail" placeholder="для уведомлений об оплате"/>
      </div>
      <button type="submit">Создать платеж</button>
    </form>
  )
}

export default Ask