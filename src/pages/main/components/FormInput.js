import React from "react";

function FormInput({ type, functionalUpdate, value,labelText }) {
  const randomId = Math.random() * Math.random() + 431;

  return (
    <div className="mb-3">
      <label htmlFor={randomId} className="form-label">
        {labelText}
      </label>
      <input
        onInput={functionalUpdate}
        value={value}
        type={type}
        className="form-control"
        id={randomId}
        aria-describedby="loginHelp"
      />
    </div>
  );
}

export default FormInput;
