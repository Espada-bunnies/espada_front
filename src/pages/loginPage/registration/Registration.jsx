import React, { useEffect, useState } from 'react'
import style from './registration.module.scss'
import logo from '../../../assets/images/logo.svg'
import FormInput from '../../../components/UI/input/formInput/FormInput'
import FormButton from '../../../components/UI/button/formButton/FormButton'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function Registration() {

  const [user, setUser] = useState({ login: '', password: '', email: '', })
  const [replayPass, setReplayPass] = useState('')
  const [password, setPasssword] = useState(null)
  const [login, setLogin] = useState(null)
  const [email, setEmail] = useState(null)
  const [formState, setFormState] = useState(false)

  useEffect(() => validatePass(replayPass), [user.password])


  const validatePass = () => {
    if (replayPass !== ''){
      if (replayPass === user.password) setPasssword(true)
      else setPasssword(false)
    }
    else setPasssword(null)
  }

  const validateLogin = (value) => {
    if (value === '') setLogin(null)
    else if (value === 'Alex') setLogin(false)
    else setLogin(true)
  }

  useEffect(() => {
    validatePass()
  }, [replayPass])

  const validateEmail = (value) => {
    if (value === '') setEmail(null)
    else if (value === 'test@gmail.com') setEmail(false)
    else setEmail(true)
  }

  useEffect(() => {
    if (login && email && password) setFormState(true)
    else setFormState(false)
  }, [ password, login, email ])

  return (
    <div className={style.registrationPage}>
      <div className={style.registration}>
        <div className={style.logoBLock}>
          <img src={logo}/>
          <p>Регистрация аккаунта</p>
        </div>
        <form>
          <FormInput
            placeholder={'Логин'}
            value={user.login}
            onChangeFunc={(e) => {setUser({ ...user, login: e.target.value}); validateLogin(e.target.value)}}
            status={login}
            label={'Такое имя пользователя уже существует'}
          />
          <FormInput
            type={'password'}
            placeholder={'Пароль'}
            value={user.password}
            status={user.password !== '' ? true : null}
            onChangeFunc={(e) => setUser({ ...user, password:e.target.value })}
          />
          <FormInput
            type={'password'}
            value={replayPass}
            placeholder={'Повторите пароль'}
            onChangeFunc={(e) => setReplayPass(e.target.value)}
            status={password}
            label={'Пароли не совпадают'}
          />
          <FormInput
            placeholder={'E-mail'}
            value={user.email}
            onChangeFunc={(e) => {setUser({ ...user, email:e.target.value }); validateEmail(e.target.value)}}
            status={email}
            label={'Почта уже зарегистрирована на сайте'}
          />
          <FormButton
           disabled={!formState}

          >Заргеистрироваться</FormButton>
          <p>Уже сть аккаунт?</p>
          <Link to='/login'>
            <FormButton active={true}>Войти</FormButton>
          </Link>
        </form>
      </div>
    </div>

  )
}
