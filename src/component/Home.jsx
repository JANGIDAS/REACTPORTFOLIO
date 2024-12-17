import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './home.css'
import aksh from '../assets/aksh2.jpg'
import resume from '../assets/cv.pdf'
import { Link } from 'react-router-dom';
const Home = () => {
  const [ text ] = useTypewriter({
    words: ['Web Designer', 'Front-End Developer'], // Array of words to type
    loop: true, // Infinite loop
    typeSpeed: 100, // Typing speed in ms
    deleteSpeed: 50, // Deleting speed in ms
    delaySpeed: 1000, // Delay between words in ms
  });

  return (
    <>
    <div className='yes w-full'>
    <div className='container top py-3 grid md:grid-cols-2'>
      <div className='' data-aos="flip-left"><img  className='w-[250px] h-[250px] mx-auto rounded-full'  src={aksh} alt="" /></div>

      <div className='p-5 lg:text-left'>
      <h1 className="text-[#e6dbc9] text-2xl mb-4"><span>Hello,</span> I am Ashok jangid</h1>
      <h2 className="text-[#be4f0c] font-bold text-3xl">
        {text}
        <Cursor />
      </h2>
      <button className='cv-btn'>
      <a href={resume} download="Ashok_Jangid_Resume.pdf">
              Download CV
            </a>
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
