import React from 'react';

import styles from './formButton.module.scss';

interface FormButton_props {
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const FormButton: React.FC<FormButton_props> = ({ children, disabled, active, onClick }) => {
  return (
    <button
      className={`${styles.formButton}${active ? ` ${styles.active}` : ''}${disabled ? ` ${styles.disabled}` : ''}`}
      disabled={disabled}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </button>
  );
};
export default FormButton;
