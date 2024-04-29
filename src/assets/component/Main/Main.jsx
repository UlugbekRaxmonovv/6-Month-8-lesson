import React,{useEffect,useState} from 'react';
import './Main.css'
import axios from '../../api';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css'

  
  

const Main = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() =>{
Aos.init()
  },[])

 useEffect(() =>{
  setLoading(true)
  axios
  .get("/products")
  .then(ris=>setData(ris.data.products))
  .catch(arr=>console.log(arr))
  .finally(() => setLoading(false))
 },[])


 let products=data?.map((el,inx) =>(
  <div className="all-kol" key={inx}>
     <Link to={`products/${el.id}`}>
     <img style={{width:'380px', height:'300px',padding:'0 20px'}}  src={el.images[0]} alt="" />
     </Link>
       <div className="all-kol1">
         <h1>{el.title}</h1>
        <div className="All1">
          <div className="all">
         <p style={{fontSize:"15px"}}>{el.brand}</p>
          <button>Learn</button>
          </div>
        </div>
         <p>{el.description}</p>
         <div className="ikon">
         <div className="ikon1">
         <h5>{el.category}</h5>
          </div>
          <div className="ikon1">
         <MdArrowRightAlt />
          </div>
         </div>
      
        </div>
        </div>
))
    return (
        <div>
                         <section className='section'>
    <div className="container">
      <div className="hammasi">
        <div className="hammasi-all" data-aos="fade-right">
          <h1>Prosper with our bespoke solutions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
          <div className="all">
          <div className="all1">
          <button>See our services</button>

            </div>
            <div className="all1">
          <button>See All Services </button>
            </div>
          </div>

          <h2>Worked with 100+ Companies</h2>
          <div className="img">
          <div className="img-all">
             <img src="https://www.casaley.com.mx/wp-content/uploads/2021/11/LOGOIPSUM-01.png" alt="" />
            </div>
            <div className="img-all">
             <img src="https://www.casaley.com.mx/wp-content/uploads/2021/11/LOGOIPSUM-01.png" alt="" />
            </div>
            <div className="img-all">
             <img src="https://www.casaley.com.mx/wp-content/uploads/2021/11/LOGOIPSUM-01.png" alt="" />
            </div>
            
          </div>
        </div>
        <div className="hammasi-all" data-aos="fade-left">
          <img src="https://www.vitae.ac.uk/researcher-training/selectivefocusphotoofmanusinglaptop1438081.jpg/@@images/image.jpeg" alt="" />
        </div>

      </div>

          <div className="tig">
      <h4>Latest Blog & News</h4>
          </div>


{loading ?   <div class="container">
        <div class="loading">
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
            <div class="loading-content">
                <div class="loadingg">
                   
                </div>
                <div class="text">
    
                </div>
                <div class="text">
    
                </div>
            </div>
        </div>
    
     </div> : <></>}
       
      <div className="all-row container">
   {products}
</div>
    </div>
   </section>
        </div>
    );
}

export default Main;
