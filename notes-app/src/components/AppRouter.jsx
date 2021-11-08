import React, { useContext } from 'react'
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import {Redirect} from "react-router"
import {privateRoutes,pablicRoutes } from '../router/routes';
import { AuthContext } from '../context/authContext';
import MyLoader from './UI/loader/MyLoader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  if (isLoading){
    return <MyLoader/>
  }
    return (
      isAuth
      ?
        <Switch>
            {privateRoutes.map(route =>
            <Route 
                component = {route.component} 
                path = {route.path} 
                exact={route.exect}
                key = {route.path}
                />)}
              <Redirect to = '/about'/>
        </Switch>
      :
      <Switch>
      {pablicRoutes.map(route =>
         <Route 
            component = {route.component} 
            path = {route.path} 
            exact={route.exect}
            key = {route.path}
          />)}
          <Redirect to = '/login'/>
      </Switch>
    )
}

export default AppRouter
