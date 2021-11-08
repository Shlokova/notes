import React from 'react'
import About from "../pages/About";
import Notes from "../pages/Notes";
import NotFound from "../pages/NotFound";
import Training from "../pages/Training";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

const AppRouter = () => {
    return (

        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/notfound">
            <NotFound />
          </Route>
          <Route path="/training">
            <Training />
          </Route>
        </Switch>
      
    )
}

export default AppRouter
