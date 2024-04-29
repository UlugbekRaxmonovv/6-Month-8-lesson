import React,{useEffect,useState} from 'react';
import './SingleRoute.css'
import { useParams } from 'react-router-dom';
import axios from '../../api';
import { MdArrowRightAlt } from "react-icons/md";
import { FaFacebookF, FaYoutube,FaSquareInstagram } from "react-icons/fa6";

const SingleRoute = () => {
    const {id} = useParams()
  const [prodact,setProdact] = useState(null)
    useEffect(()=> {
       axios
       .get(`/products/${id}`) 
       .then(ris => setProdact(ris.data))
       .catch(arr=>console.log(arr))
    }, []);

    return (
        <div>
          <section className='SingleRoute'>
            <div className="container">
                 <div className="SingleRoute-all">
                    <div className="SingleRoute-row">
                      <h1>Our internal <br /> process and <br /> longerm vision</h1> 
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                      <div className="list-all">
                      <div className="list-etim">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                    <div className="SingleRoute-all">
                 <img src={prodact?.thumbnail} alt="" />
                    </div>
                 </div>
  


                
            </div>

          </section>
          <section className='SingleRoute-list container'>
          <div className="h1">
                <h1>All posts</h1>
              </div>
                 <div className="all-img">
                 <div className="row-img">
                        <img src={prodact?.images[3]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                    <div className="row-img">
                        <img src={prodact?.images[1]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                    <div className="row-img">
                        <img src={prodact?.images[2]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                    <div className="row-img">
                        <img src={prodact?.images[1]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                 </div>
          </section>



          <footer className='footir-22'>
      <div className="container">
        <div className="footir">
        <div className="footir-all">
            <img src="https://assets-global.website-files.com/6354fb4ed13ee97810525ee8/6354fb4ed13ee9d7cc525f93_Logoipsum_5_D.svg" alt="" />
            <h1>Bespoke software solutions</h1>
            <div className="ikon">
            <div className="ikon-all">
            <FaFacebookF />
              </div>
              <div className="ikon-all">
              <FaYoutube />
              </div>
              <div className="ikon-all">
              <FaSquareInstagram />
              </div>
              <div className="ikon-all">
              <FaFacebookF />
              </div>
            </div>
            <p>© All rights reserved – Finsweet</p>
          </div>

          <div className="footir-all">
      <ul>
        <h1>Company</h1>
        <li>
          <a href="" className="">About Us</a>
        </li>
        <li>
          <a href="" className="">Careers</a>
        </li>
        <li>
          <a href="" className="">Services</a>
        </li>
        <li>
          <a href="" className="">Blog</a>
        </li>
      </ul>
          </div> 
          <div className="footir-all">
      <ul>
        <h1>Connect</h1>
        <li>
          <a href="" className="">hi@finsweet.com</a>
        </li>
        <li>
          <a href="" className="">+(123) 456-7890</a>
        </li>

      </ul>
          </div>  

          <div className="footir-all">
      <ul>
        <h1>Join Newsletter</h1>
        <li>  
         <div className="input-link">
          <div className="input-gmail">
            <input type="text"  placeholder='Type email here'/>
          </div>
         </div>
        </li>
        <li>
          <button className='btn1'>Subscribe</button>
        </li>
        <li>
          <div className="links">
          <div className="link-1">
              <p>Privacy Policy</p>
            </div>
            <div className="link-1">
              <p>Terms & Conditions</p>
            </div>
          </div>
        </li>

      </ul>
          </div>  
        </div>
      </div>
    </footer>
        </div>
    );
}

export default SingleRoute;
