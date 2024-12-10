import React from "react";
import './footer.css'
import { FaGithub,FaLinkedin} from "react-icons/fa";
import logo from '../assets/logo.png'
const Footer=()=>{
    return(
<>
<footer className="grid grid-cols-3 lg:grid-cols-3  sm:grid-cols-1">
    <div className="side text-center"> <p>address:-jodhpur rajasthan</p> 
         <p>mobile No. 8209312434</p>
         <p>mail: jangidas056@gmail.com</p>
    </div>
    <div className="mid ">
    <ul className="footer-links">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/skill">skill</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
        <div className="icons">
         <a href="https://github.com/JANGIDAS?tab=repositories"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ashok-jangid-2577a9291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        </div>
    </div>
    <div className="rights"><img src={logo} alt="" /></div>
</footer>
</>
    )
}
export default Footer;