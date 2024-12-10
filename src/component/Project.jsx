import React from "react";
import './project.css'
import shayari from '../assets/shayari.png'
import vish from '../assets/vishkarma.png'
import sar from '../assets/sar.png'
import { Link } from "react-router-dom";
const Project =()=>{

    return(
        <> 
        <h1 className="text-center mypro"> my project</h1>
        <div className="container grid md:grid-cols-3 project  gap-2 text-center">
            <div className="thumbnail">
                <Link to={"https://shayarijewellers.netlify.app/"}>
                <img src={shayari} alt="" />
                 <h6>shayari jewellers</h6>
                 <p>using html css js bootsraph</p>
                </Link>
               
            </div>
            <div className="thumbnail">
                <Link to={"https://vishwakarmafurniture.netlify.app/"}>
                <img src={vish} alt="" />
                <h6>vishwakarma furniture</h6>
                <p>using html css js bootsraph</p>
                </Link>
                
                </div>
            <div className="thumbnail">
                <Link to={"https://villagsar.netlify.app/"}>
                <img src={sar} alt="" />
                <h6>village Sar </h6>
                <p>using html css js bootsraph</p>
                </Link>
               
             </div>
        </div>
        </>
    )
}
export default Project;