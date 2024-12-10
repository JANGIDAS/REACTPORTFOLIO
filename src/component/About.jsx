import React from 'react'
import './about.css'
 const About = () => {
  return (
    <>

    <div className='container grid md:grid-cols-2'>
    <div className='text'>
      <h3 className='text-center'>about me</h3>
      <p> my self ashok jangid i have complate bechalor of computer application from gd memorial group of collages jodhpur rajasthan in 2019 
      and i have done front-End developer course from oilab learning institute from jodhpur
      </p>
    </div>
      <div className='img'>
        <img src="https://images.unsplash.com/photo-1580983694176-b6b4e3e010a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxjb2Rpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
     <button className='read uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded'>read more</button>
    </div>
    </>
  )
}
export default About;