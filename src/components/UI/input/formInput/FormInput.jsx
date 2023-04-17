import React from 'react'
import style from './formInput.module.scss'
import classNames from 'classnames'

export default function FormInput({ type, value, onChangeFunc, placeholder, status, label }) {


    return (
        <div className={style.inputBlock}>
            <input
            className={classNames(style.formInput, status !== null && (status ? style.verificationPassed : style.verificationFailed)) } 
                type={type}
                value={value}
                onChange={onChangeFunc?(e) => onChangeFunc(e): () => {}}
                placeholder={placeholder}
            />
            <label className={classNames(status !== null && (!status && style.active))}>
                {label}
            </label>
        </div>

    )
}
