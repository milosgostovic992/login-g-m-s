
import './App.css'
import Home from './components/Home/Home';
import Content from './components/Content/Content';
import LoginSignUp from './components/LoginSignUp/LoginSignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContextProvider from './context/LoginContext';
import bgImg from './assets/bgImg.jpg';

function App() {

  return (
    <BrowserRouter>
    <LoginContextProvider>
          <img className='bg-img' src={bgImg} alt="" />
          <Routes>
            <Route path="/" element={ <LoginSignUp/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/games" element={<Content type="games" />} />
            <Route path="/movies" element={<Content type="movies" />} />
            <Route path="/dota2" element={<Content type="Dota2" />} />
          </Routes>
    </LoginContextProvider>
      </BrowserRouter>
  )
}

export default App
