import React, { useContext } from 'react'
import MyButtons from '../components/UI/buttons/MyButtons'
import MyInput from '../components/UI/input/MyInput'
import MyModal from '../components/UI/modal/MyModal'
import { AuthContext } from '../context/authContext'
import '../styles/Login.css'

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <MyModal visible = {true} setVisible = {()=>{}}>
            <h2>Авторизация</h2>
           
            <div>
                <MyInput type = 'text' placeholder="Введите логин"/>
                <MyInput type = 'password' placeholder="Введите пароль"/>
            </div>
                <MyButtons onClick = {login}>Войти</MyButtons>
         
        </MyModal>
    )
}

export default Login
