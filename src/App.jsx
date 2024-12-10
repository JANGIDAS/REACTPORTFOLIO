
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Skill from './component/Skill'
import Contact from './component/Contact'
import Project from './component/Project'
import Footer from './component/Footer'


function App() {
 

  return (
    <>
    <div className='yes w-full'>
    <Header/>
    </div>
    
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <About/>
    <Project/>
    <Skill/>
    <Footer/>
    </>
  )
}

export default App
