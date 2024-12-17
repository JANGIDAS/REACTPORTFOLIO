import './about.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

 const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,  // Offset from the element (in px)
      delay: 200,   // Delay in animation (in ms)
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function
      once: true, // Only animate once
    });
  }, []);
  return (
    <>

    <div className='container grid md:grid-cols-2'>
    <div className='text' data-aos="zoom-in">
      <h3 className='text-center'>about me</h3>
      <p data-aos="zoom-in"> my self ashok jangid i have complate bechalor of computer application from gd memorial group of collages jodhpur rajasthan in 2019 
      and i have done front-End developer course from oilab learning institute from jodhpur
      </p>
    </div>
      <div className='img' data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1580983694176-b6b4e3e010a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxjb2Rpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
     <button className='read uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded'>read more</button>
    </div>
    </>
  )
}
export default About;