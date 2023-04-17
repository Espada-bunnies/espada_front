import React, { useEffect, useState } from 'react'
import style from './login.module.scss'
import logo from '../../../assets/images/logo.svg'
// import FormInput from '../../../components/UI/input/formInput/FormInput'
// import FormButton from '../../../components/UI/button/formButton/FormButton'
import FormButton from '../../../components/UI/button/formButton/FormButton'
import FormInput from '../../../components/UI/input/formInput/FormInput'
import { Link } from 'react-router-dom'

export default function Login() {
    const [formState, setFormState] = useState(false)
    const [user, setUser] = useState({ login: '', paaaword: '', })
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)

    const validateLogin = (value) => {
        if (value === '') setLogin(null)
        else if (value === 'Alex') setLogin(false)
        else setLogin(true)
    }

      const validatePassword = (value) => {
        if (value === '') setPassword(null)
        else if (value === '1') setPassword(false)
        else setPassword(true)
    }

    useEffect(() => {
        if (login && password) setFormState(true)
        else setFormState(false)
    }, [ password, login ])


  return (
    <div>
        <div className={style.loginPage}>
            <div className={style.login}>
                <div className={style.logoBlock}>
                    <img src={logo}/>
                    <p>Вход в аккаунт</p>
                </div>
                <form>
                    <FormInput
                        placeholder={'Логин'}
                        value={user.login}
                        onChangeFunc={(e) => {setUser({ ...user, login: e.target.value}); validateLogin(e.target.value)}}
                        status={login}
                        label={'Такого пользователя не существует'}
                    />
                    <FormInput
                        placeholder={'Пароль'}
                        value={user.password}
                        onChangeFunc={(e) => {setUser({ ...user, password: e.target.value}); validatePassword(e.target.value)}}
                        status={password}
                        label={'Неверный пароль'}
                    />
                    <div className={style.link}>Забыли пароль?</div>
                    <FormButton disabled={!formState}>Войти</FormButton>
                    <p>Ещё нет аккаунта?</p>
                    <Link to='/reg'>
                        <FormButton active={true}>Заргеистрироваться</FormButton>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
