import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/NavBar'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/DetailsPage'
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Accountes from './Pages/Accountes';

function App() {
 
  return (
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/account' element={<Accountes/>}/>
       <Route path='/details/:id' element={<DetailsPage/>}/>
       <Route path='/about'element={<AboutUs/>}/>
       <Route path='/contact'element={<ContactUs/>}/>
     </Routes>
    </Router>
  )
}

export default App