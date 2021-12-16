import React, { useState } from "react"
import { AboutMe } from "./components/aboutMe"
import { WhatIDo } from "./components/whatIdo"

export default function Home() {
  const [vals, setVals] = useState('');
  const handleStyle = ()=>{
    if (vals =="") {
      document.querySelector('.ul').style.display = "block";
      setVals("avail")
    }else{
      document.querySelector('.ul').style.display = "none";
      setVals("")
    }
  }
  return (
    <div>
        <header>
          <nav className="navbar animated bounceIn">
            <a href="#" className="navbar-nav">
              Peter
            </a>
            <button className="btn toggle" onClick={handleStyle}>
              Btn
            </button>
            <ul className="ul">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="d-flex allInfo">
            <div className="info">

              <h3 style={{fontWeight:'400'}}>HELLO, I'M PETER</h3>
              <h1 className="h1">FULL STACK DEVELOPER</h1>
              <p>Full-time Fullstack Developer based in Nigeria, Let's connect..</p>

              <div className="d-flex sInfo" style={{width:"200px", marginLeft:"20px"}}>
                <button className="btn" style={{backgroundColor:"#fff", color:"blue"}}>Hire Me</button>
                <button className="btn">My CV</button>
              </div>

            </div>
            <div className="hero">
              <div className="peter"></div>
            </div>
          </div>
        </header>
        <AboutMe style={{marginTop:"10%"}}/>
        <WhatIDo />
        
        <footer>
          <h2 style={{letterSpacing:"0.5px", textAlign:"center", fontFamily:"cursive, arial, fantacy san-serif",fontWeight:"bold",color:"white"}}>Peter.</h2>
        <p style={{letterSpacing:"0.5px", textAlign:"center", color:"white", fontWeight:"light"}}>COPYRIGHT © 2021 DESIGN BY Peter</p>
        </footer>
    </div>
  )
}


