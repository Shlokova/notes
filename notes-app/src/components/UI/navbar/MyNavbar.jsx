import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'
import MyButtons from '../buttons/MyButtons'
import cl from './MyNavbar.module.css'


const MyNavbar = () => {
 
    const {setIsAuth} = useContext(AuthContext);

    const logout = () =>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={cl.navbar}>
            <MyButtons onClick  ={logout}>Выйти</MyButtons>
            <div className={cl.navbar__links}>
                <NavLink className={cl.navbar__links__item} activeClassName = {cl.active__links} to = '/about'>о сайте</NavLink>
                <NavLink className={cl.navbar__links__item} activeClassName = {cl.active__links} to='/notes'> заметки </NavLink>
                <NavLink className={cl.navbar__links__item} activeClassName = {cl.active__links} to = '/training'>тесты</NavLink>
            </div>
        </div>
    );
}

export default MyNavbar
