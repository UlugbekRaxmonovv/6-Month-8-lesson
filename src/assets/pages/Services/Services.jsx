import React from 'react';
import './Services.css'
import { FaFacebookF, FaYoutube,FaSquareInstagram } from "react-icons/fa6";

const data =[
    {
      id:1,
      img:'https://media.istockphoto.com/id/1327765791/photo/smiling-young-asian-businesswoman-standing.jpg?s=612x612&w=0&k=20&c=ewcogScjnutv6ehMGhWfBOOhbtvbNn3dWoNNywpduTU=',
      title:'Why you have to digitalize in 2021',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      h2:'Learn More'
    },
    {
      id:2,
      img:'https://img.freepik.com/free-photo/handsome-stylish-entrepreneur-pointing-laptop-display_176420-17906.jpg',
      title:'Our internal process and longerm vision',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      h2:'Learn More'
    },
    {
      id:3,
      img:'https://media.istockphoto.com/id/1327765791/photo/smiling-young-asian-businesswoman-standing.jpg?s=612x612&w=0&k=20&c=ewcogScjnutv6ehMGhWfBOOhbtvbNn3dWoNNywpduTU=',
      title:'Helping the next generation of leaders',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      h2:'Learn More'
    },
  ]
  
  
  
  let creat=data?.map((el,inx) =>(
    <div className="all-kol" key={inx}>
         <img src={el.img} alt="" />
         <div className="all-kol1">
           <h1>{el.title}</h1>
           <p>{el.p}</p>
           <h5>{el.h2}</h5>
          </div>
          </div>
  ))

const Services = () => {
    return (
        <div>
             <section className='CreatCard'>
            <div className="container">
            <div className="CreatCard-all">
                <div className="CreatCard-row">
                    <h1>We serve clients <br/> with ground <br/> breaking solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    <button className='btn1'>Work With Us</button>
                </div>
                <div className="CreatCard-row">
                   <img src="https://media.istockphoto.com/id/1456192111/photo/smiling-businesswoman-using-a-laptop-computer-in-the-cafe.webp?b=1&s=170667a&w=0&k=20&c=W78sCxT_FQtgsqzgfQ43kRAM97c31-xqmWTkf43IA_M=" alt="" />
                </div>
            </div>
            </div>
           </section>
        
           <section className='section1'>
    <div className="container">
          <div className="tig   ">
      <h4>Latest Blog & News</h4>
          </div>
      <div className="all-row container">
    {creat}
</div>
    </div>
   </section>

   <footer className='footir-1'>
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

export default Services;
