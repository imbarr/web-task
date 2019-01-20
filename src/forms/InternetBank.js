import React from "react"
import StatusForm from "./StatusForm";
import {AccountNumber, BIC, Money, TaxId, VAT} from "./Inputs";

class InternetBank extends StatusForm {
  path = '/internet-bank';

  form = (
    <form id="internet-bank-content">
      <div className="labels">
        <label htmlFor="bank__tax-id">От кого (ИНН)</label>
        <TaxId id="bank__tax-id"/>
        <label htmlFor="bank__bic">БИК</label>
        <BIC id="bank__bic"/>
        <label htmlFor="bank__account">Номер счёта</label>
        <AccountNumber id="bank__account"/>
        <label htmlFor="bank__vat">НДС</label>
        <VAT id="bank__vat"/>
        <label htmlFor="bank__money">Сколько</label>
        <Money id="bank__money"/>
      </div>
      <button type="submit">
        Получить файл для интернет-банка
      </button>
    </form>
  )
}

export default InternetBank;