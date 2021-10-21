import React, { useState, useMemo } from "react";
import FormInput from "./FormInput";
import Auth from "../../../api/Auth";
const formPaint = [
  { id: 1, type: "text", labelText: "Логин", key: "login" },
  { id: 2, type: "password", labelText: "Пароль", key: "password" },
];
function FormAuth({Сompletion}) {
  const [form_date, set_form_date] = useState({ password: "", login: "" });

  const UpdateFormDate = (key, value) =>
    set_form_date({ ...form_date, [key]: value });

  const RenderFormInputs = () =>
    formPaint.map(({ value, type, id, labelText, key }) => (
      <FormInput
        functionalUpdate={({ target: { value } }) =>
          UpdateFormDate(key, value.trim())
        }
        value={value}
        key={id}
        type={type}
        labelText={labelText}
      />
    ));
  const memoizedFormDate = useMemo(() => Auth(form_date), [form_date]);


  return (
    <form>
      {RenderFormInputs()}
      <button
        disabled={!memoizedFormDate}
        type="submit"
        className="btn btn-primary"
        onClick={() => memoizedFormDate ? Сompletion(form_date.login) : ''}
      >
        Отправить
      </button>
    </form>
  );
}

export default FormAuth;
