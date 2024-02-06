
import './App.css'
import Home from './components/Home/Home';
import Games from './components/Games/Games';
import LoginSignUp from './components/LoginSignUp/LoginSignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContextProvider from './context/LoginContext';
import Movies from './components/Movies/Movies';

function App() {

  return (
    <BrowserRouter>
    <LoginContextProvider>
          <Routes>
            <Route path="/" element={ <LoginSignUp/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/movies" element={ <Movies/>}/>
            <Route path="/movies" element={ <Home/>}/>
          </Routes>
    </LoginContextProvider>
      </BrowserRouter>
  )
}

export default App