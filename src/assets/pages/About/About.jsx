import React from 'react';
import './About.css';
import { FaFacebookF, FaYoutube,FaSquareInstagram } from "react-icons/fa6";

const Creat =[
    {
        id:1,
        h1:'15',
        h2:'Awards received',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
    },
    {
        id:2,
        h1:'500+',
        h2:'Clients served',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
    },
    {
        id:3,
        h1:'34',
        h2:'Employees',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
    },
    {
        id:3,
        h1:'130+',
        h2:'Custom solutions',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
    },
]

let CreatAll =Creat?.map((el,inx) => (
    <div className="CreatCard-row-all1" key={inx}>
    <h1>{el.h1}</h1>
    <h3>{el.h2}</h3>
    <p>{el.p}</p>
</div>


))

const data =[
    {
      id:1,
      img:'https://media.istockphoto.com/id/1327765791/photo/smiling-young-asian-businesswoman-standing.jpg?s=612x612&w=0&k=20&c=ewcogScjnutv6ehMGhWfBOOhbtvbNn3dWoNNywpduTU=',
      title:'Why you have to digitalize in 2021',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      h2:'Learn More',

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
const About = () => {
    return (
        <div>

           <section className='CreatCard'>
            <div className="container">
            <div className="CreatCard-all">
                <div className="CreatCard-row">
                    <h1>We value human, organizational, and operational <br /> intelligence, not just <br /> artificial</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    <button className='btn1'>Work With Us</button>
                </div>
                <div className="CreatCard-row">
                   <img src="https://www.six-group.com/dam/images/career/apprentices-six.six-image.standard.720.jpg" alt="" />
                </div>
            </div>

            <div className="CreatCard-btn">
            <div className="CreatCard-all1">
                <h1>The energy of a start-up combined with 30 years of experience</h1>
                </div>
                <div className="CreatCard-all1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>

                </div>
            </div>

            <div className="CreatCard-row-all" >
                  {CreatAll}
            </div>
            </div>
           </section>

           <section className='section1'>
    <div className="container">
          <div className="tig">
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

export default About;
