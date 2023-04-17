import React from 'react'
import style from './formButton.module.scss'
import classNames from 'classnames'

export default function FormButton({ children, disabled, active }) {
  return (
    <button 
        className={classNames(style.formButton, (active&&style.active))}
        disabled={disabled}
    >
        {children}
    </button>
  )
}
