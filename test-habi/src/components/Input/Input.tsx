import React from "react";
import "../../styles/Input.css";

export type InputProps = {
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  id: string;
  placeholder?: string;
  checked?: boolean;

}

const Input = ({ onChange, label, id, type, placeholder, checked }: InputProps): JSX.Element => {
  return (
    <div className="formContainer">
      <label className="formLabel">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="formInput"
        onChange={onChange}
        placeholder={placeholder}
        checked={checked}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
