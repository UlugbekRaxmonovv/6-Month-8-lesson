import React from 'react';
import './Blog.css'
import { FaFacebookF, FaYoutube,FaSquareInstagram } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const Blog = () => {
    return (
        <div>
            <section className='CreatCard'>
            <div className="container">
            <div className="alt">
              <div className="alt1">
                <MdPeopleAlt />
                <span>Andrew Jonson</span>
                </div>
                <div className="alt1">
                <span>Posted on 27th January 2021</span>
                </div>
              </div>
            <div className="CreatCard-all">
           
                <div className="CreatCard-row">
                    <h1>Our internal  process and  <br />longerm vision</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                    <button className='btn1'>View Positions</button>
                </div>
                <div className="CreatCard-row">
                   <img src="https://www.estudiareneuropa.eu/img/wo/6/25/2-Learner-mobility-obrazek_duzy_4045625.jpg" alt="" />
                </div>
            </div>
            </div>
           </section>


           <footer className='footir-2'>
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

export default Blog;
