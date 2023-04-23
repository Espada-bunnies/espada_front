import React from 'react';

import styles from './FormInput.module.scss';

interface FromInputTypes {
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (str: string) => void;
  placeholder?: string;
  status: boolean | null;
  label?: string;
  className?: string;
}

const FormInput: React.FC<FromInputTypes> = ({ type, value, onChange, placeholder, status, label, className }) => {
  return (
    <div className={`${styles.inputBlock} `}>
      <input
        className={`${styles.formInput} ${
          status !== null && (status ? styles.verificationPassed : styles.verificationFailed)
        } ${className !== undefined ? className : ''}`}
        type={type !== undefined ? type : 'text'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <label className={status !== null ? (!status ? styles.active : '') : ''}>{label}</label>
    </div>
  );
};

export default FormInput;
