import React, { FC, useEffect, useState } from 'react'
import FormButton from '@/components/UI/button/formButton/FormButton'
import Link from 'next/link'

import styles from './BottomButtons.module.scss'
import { IUser } from '@/pages/authorize/authorize.types';

interface BottomButtonsProps {
    pageType: string;
    user: IUser;
}

const BottomButtons: FC<BottomButtonsProps> = ({ pageType, user }) => {

    const [timer, setTimer] = useState(5)

    useEffect(() => {
        if (pageType === 'message') {
            if (timer >= 1) {
                setTimeout(() => {
                    setTimer(timer-1)
                }, 1000);
            }
        }

    }, [timer, pageType])

    return (
        <div>
            {pageType === 'registration' ? (
                <>
                    <FormButton disabled={!(user.login.isValid && user.password.isValid && user.passwordRepeat.isValid && user.email.isValid)}>Зарегистрироваться</FormButton>
                    <p className={styles.text}>Уже есть аккаунт?</p>
                    <Link href="/authorize/login" className={styles.link_btn}>
                        <FormButton active={true}>Войти</FormButton>
                    </Link>
                </>
            ) : pageType === 'login' ? (
                <>
                    <Link href="/authorize/forgotPassword" className={styles.link}>
                        Забыли пароль?
                    </Link>
                    <FormButton disabled={!(user.login.isValid && user.password.isValid)}>Войти</FormButton>
                    <p className={styles.text}>Ещё нет аккаунта?</p>
                    <Link href="/authorize/registration" className={styles.link_btn}>
                        <FormButton active={true}>Зарегистрироваться</FormButton>
                    </Link>
                </>
            ) : pageType === 'forgotPassword' ? (
                <>
                    <p className={styles.text}>Вам на почту будет отправлено письмо с ссылкой на восстановление пароля</p>
                    <Link href="/authorize/message">
                        <FormButton disabled={!(user.email.isValid)}>Отправить</FormButton>
                    </Link>
                    <Link href="/authorize/login" className={styles.link_btn}>
                        <FormButton active={true}>Назад</FormButton>
                    </Link>
                </>
            ) 
            : pageType === 'message' ? (
                <>
                    <p className={styles.message}>Форма для восстановления пароля отправлена на почту:<br/><span>{user.email.value}</span></p>
                    <FormButton onClick={() => setTimer(5)} disabled={timer !== 0}>Повторить отправку {timer !== 0 && `(${timer} сек)`}</FormButton>
                    <Link href="/authorize/newPassword" className={styles.message}><p>test</p></Link>
                </>
            ) 
            : pageType === 'newPassword' ? (
                <>
                    <Link href="/authorize/newPasswordMessage" className={styles.message}>
                        <FormButton disabled={!(user.password.isValid && user.passwordRepeat.isValid)}>Сохранить</FormButton>
                    </Link>
                </>
            ) 
            : pageType === 'newPasswordMessage' ? (
                <>
                    <p className={styles.message}>Пароль изменён. Войдите на сайт с новыми данными.</p>
                    <Link href="/" className={styles.message}>
                        <FormButton>Войти</FormButton>
                    </Link>
                </>
            ) 
            :
            null}
        </div>
    )
}

export default BottomButtons