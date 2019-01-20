import React from "react";

export function AccountNumber() {
  return <input pattern="[0-9]{20}" placeholder="20 цифр" name="accountNumber"/>;
}

export function Money() {
  return  <input required placeholder="от 1 000 до 75 000 ₽" name="money"
                 pattern="([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)"/>
}

export function TaxId() {
  return <input required pattern="([0-9]{10}|[0-9]{12})" placeholder="10 или 12 цифр" name="taxId"/>
}

export function BIC() {
  return <input pattern="[0-9]{9}" placeholder="9 цифр" name="BIC"/>
}

export function VAT() {
  return (
    <select name="VAT" required>
      <option value="" disabled selected hidden>Выберите один из вариантов</option>
      <option value="18%">НДС 18%</option>
      <option value="10%">НДС 10%</option>
      <option value="None">без НДС</option>
    </select>
  )
}

export function Telephone() {
  return <input pattern="\+7[0-9]{10}" name="telephone" placeholder="+7 800 555 35 35"/>
}

export function Mail(props) {
  return <input required pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+" name="email" {...props}/>
}