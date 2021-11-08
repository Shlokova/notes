import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MyButtons from '../buttons/MyButtons'
import cl from './MyNavbar.module.css'


const MyNavbar = () => {
 
    // const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () =>{
        // setIsAuth(false)
        // localStorage.setItem('auth', 'false')
    }
    return (
        <div className={cl.navbar}>
            <MyButtons onClick  ={logout}>LogOut</MyButtons>
            <div className={cl.navbar__links}>
                <NavLink className={cl.navbar__links__item} activeClassName = {cl.active__links} to = '/about'>о сайте</NavLink>
                <NavLink className={cl.navbar__links__item} activeClassName = {cl.active__links} to='/notes'> заметки </NavLink>
                <NavLink className={cl.navbar__links__item} activeClassName = {cl.active__links} to = '/training'>тесты</NavLink>
            </div>
        </div>
    );
}

export default MyNavbar
