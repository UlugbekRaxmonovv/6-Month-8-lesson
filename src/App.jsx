
import './App.css'
import About from './assets/pages/About/About'
import Blog from './assets/pages/Blog/Blog'
import Contact from './assets/pages/Contact/Contact' 
import Home from './assets/pages/Home/Home'
import Services from './assets/pages/Services/Services'
import { Routes, Route, Link, NavLink   } from 'react-router-dom'
import SingleRoute from './assets/pages/Single-route/SingleRoute'
import NotFound from './assets/pages/NotFound/NotFound'
import { useState } from 'react'




function App() {
  const [fix,setFix] =useState(false);
  function setFixd(){
    if(window.scrollY >= 300){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixd)
  return (
    <>
    <header  className={ fix ? 'navbar fixed ' : 'navbar'}>
      <div className="container">
        <nav>
          <NavLink to={'/'}>
          <h1><img src="https://www.casaley.com.mx/wp-content/uploads/2021/11/LOGOIPSUM-01.png" alt="" /></h1>
          </NavLink>
          <ul className='nav-link'>
          <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/About'}>About</Link>
            </li>
            <li>
            <Link to={'/Services'}>Services</Link>
           
            </li>
            <li>
            <Link to={'/Contact'}>Contact</Link>
            </li>
            <li>
            <Link to={'/Blog'}>Blog</Link>
            </li>
            <li>
            <button>Clone project</button>
            </li>

          </ul>
        
        </nav>
      </div>
    </header>

    <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/About' element= {<About/>}/>
    <Route path='/Blog' element= {<Blog/>}/>
    <Route path='/Contact' element= {<Contact/>}/>
    <Route path='/Services' element= {<Services/>}/>
    <Route path='/products/:id' element= {<SingleRoute/>}/>
    <Route path='*' element= {<NotFound/>}/>
    
    </Routes>
   

  

    


   
   
    


    </>
  )
}

export default App
