import './styles/App.css'
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/authContext';
import { useEffect, useState } from 'react';
import FirebaseState from './context/firebase/FirebaseState';
import AlertState from './context/alert/AlertState';
import Confirm from './components/UI/confirm/Confirm';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('auth')){
      setIsAuth(true)

    }
    setIsLoading(false);
  }, [])
  return (
    <FirebaseState>
    <AlertState>
    <AuthContext.Provider value = {{
      isAuth,
      setIsAuth,
      isLoading
    }}>
        <div className='app'>
            <BrowserRouter>
                <MyNavbar/>
                <AppRouter/>
                <Confirm/>
            </BrowserRouter>
        </div>
    </AuthContext.Provider>
    </AlertState>
    </FirebaseState>
  )
}

export default App;
