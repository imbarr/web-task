import React from "react"
import StatusForm from "./StatusForm";

class InternetBank extends StatusForm {
  path = '/internet-bank';

  form = (
    <form id="internet-bank-content">
      <div className="labels">
        <label htmlFor="tax-id">От кого (ИНН)</label>
        <input required pattern="([0-9]{10}|[0-9]{12})"
               placeholder="10 или 12 цифр" name="taxId"/>
        <label htmlFor="bic">БИК</label>
        <input pattern="[0-9]{9}"
               placeholder="9 цифр" name="BIC"/>
        <label htmlFor="vat">НДС</label>
        <select name="VAT" required>
          <option value="" disabled selected hidden>Выберите один из вариантов</option>
          <option value="18%">НДС 18%</option>
          <option value="10%">НДС 10%</option>
          <option value="None">без НДС</option>
        </select>
      </div>
      <button type="submit">
        Получить файл для интернет-банка
      </button>
    </form>
  )
}

export default InternetBank;