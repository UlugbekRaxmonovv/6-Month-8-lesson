import React,{useState} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Footer from '../../component/Footer/Footer';
import Main from '../../component/Main/Main';
import { IoMdMenu } from "react-icons/io";




const Home = () => {
  const [toggle,setToggle] =useState(false);
  const [fix,setFix] =useState(false);


  function setFixd(){
    if(window.scrollY >= 10){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixd)
  
    return (
        <div>

<header className={ fix ? 'navbar fixed ' : 'navbar'}  >
      <div className="container">
        <nav className="container">
          <h1><img src="https://www.casaley.com.mx/wp-content/uploads/2021/11/LOGOIPSUM-01.png" alt="" /></h1>
          <ul className={`nav-link ${toggle ? 'show' : ""}`} >
          <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/About'}>About</Link>
            </li>
            <li>
            <Link to={'/Blog'}>Blog</Link>
            </li>
            <li>
            <Link to={'/Contact'}>Contact</Link>
            </li>
            <li>
            <Link to={'/Services'}>Services</Link>
            </li>
            <li>
            <button>Clone project</button>
            </li>
          
          </ul>
          <button className='button' onClick={()=> setToggle(!toggle)}>
          <IoMdMenu />
          </button>
        </nav>
      </div>
    </header>

 <Main/>


<Footer/>
   

        </div>
    );
}

export default Home;
