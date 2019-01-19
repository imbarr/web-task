import React from "react"
import StatusForm from "./StatusForm";
import Input from "./Input"

class InternetBank extends StatusForm {
  path = '/internet-bank';

  form = (
    <form id="internet-bank-content">
      <div className="labels">
        <label htmlFor="tax-id">От кого (ИНН)</label>
        <Input check={v => /^[0-9]{0,12}$/.test(v)}
               isValid={v => /^([0-9]{10}|[0-9]{12})$/.test(v)}
               id="tax-id" placeholder="10 или 12 цифр"/>
        <label htmlFor="bic">БИК</label>
        <Input check={v => /^[0-9]{0,9}$/.test(v)}
               isValid={v => /^[0-9]{9}$/.test(v)}
               id="bic" placeholder="9 цифр"/>
        <label htmlFor="vat">НДС</label>
        <select id="vat" required>
          <option value="" disabled selected hidden>Выберите один из вариантов</option>
          <option>НДС 18%</option>
          <option>НДС 10%</option>
          <option>без НДС</option>
        </select>
      </div>
      <button type="submit" id="submit-internet-bank">
        Получить файл для интернет-банка
      </button>
    </form>
  )
}

export default InternetBank;