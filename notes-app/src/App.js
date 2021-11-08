import './styles/App.css'
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from './components/AppRouter';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>

    
    <MyNavbar/>
    <AppRouter/>
      
        </BrowserRouter>
    </div>
  )
}

export default App;
