import { useReducer, useState } from 'react'
import './App.css'
import HeroPage from './assets/components/HeroPage'
import GalleryPage from './assets/components/GalleryPage'
import AboutPage from './assets/components/AboutPage'
import Footer from './assets/components/FooterPage'
/* import Silders from './assets/components/silders' */




function App() {
 
  
  return (
      <div>
        <HeroPage/>
        {/*  <Silders/> */}
        <GalleryPage/>
        <AboutPage/>
        <Footer/>

      </div>
  )
}

export default App
