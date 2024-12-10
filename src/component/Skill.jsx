import React from 'react'
import './skill.css'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.png'
import react from '../assets/react.jpg'
import ohkb from '../assets/boots.jpg'
import ohkt from '../assets/talwind.jpg'
import jq from '../assets/jquery.jpg'
import ohkws from '../assets/ohkws.png'
 const Skill = () => {
  return (
    <>
    <h3 className=' text-center skill'> Skills </h3>
      <div className='container grid w-full md:grid-cols-4 md:m-auto sm:grid-cols-3 p-5 gap-8 text-center'>
           <div class="ui-values"><img src={html} alt="" /></div>
            <div class="ui-values"><img src={css} alt="" /></div>
            <div class="ui-values"><img src={js} alt="" /></div>
            <div class="ui-values"><img src={react} alt="" /></div>
            <div class="ui-values"><img src={ohkb} alt="" /></div>
            <div class="ui-values"><img src={ohkt} alt="" /></div>
            <div class="ui-values"><img src={jq} alt="" /></div>
            <div class="ui-values"><img src={ohkws} alt="" /></div>
    </div>

    </>
  )
}
export default Skill;