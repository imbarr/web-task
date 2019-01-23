import React from "react"
import {AccountNumber, BIC, Money, TaxId, VAT} from "./Inputs";
import { stringify } from 'query-string';
import config from "../Config"

let handleSubmit = (event) => {
  let data = new FormData(event.target);
  let obj = {};
  for (const [key, value]  of data.entries()) {
    obj[key] = value;
  }
  window.open(config.serverURI + "/payment?" + stringify(obj),'_blank');
  event.preventDefault()
};

const InternetBank = () =>
    <form id="internet-bank-content" onSubmit={handleSubmit}>
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
    </form>;

export default InternetBank;