import React from 'react'

export const AboutMe = () => {
    return (
        <div className='container aboutme' id='about'>
            <div className='d-flex'>
                <div className='service'>
                    
                </div>
                <div className='avater'></div>
                <div className='aboutMe'>
                    <h3 style={{color:"blue", fontWeight:"400", letterSpacing:"2px"}}>About Me</h3>
                    <h2 style={{letterSpacing:"1px"}}>Full-Stack Developer</h2>
                    <p style={{textAlign:"justify", padding: "10px",}}>
                        My name is Peter, I'm a Full Stack Developer who derives pleasure in Development. I have a solid background as a self-taught Developer in Coding and I've been very active in the Information Technology field for the past 4 years. I devote time to reading codes, problem-solving, and personal & leadership development.
                    </p>
                    <p style={{textAlign:"justify", padding: "10px",}}>
                    So far, I have professionally made use of technologies/languages like HTML, CSS, JavaScript, PHP, Git & GitHub, and frameworks such as ReactJS, JQuery, and Bootstrap. I'm also conversant with Laravel and Core PHP for backend development. I'm familiar with other technologies AngularJS, ExpressJS, NodeJS, MongoDB, MySQL.
                    </p>

                    <div>
                        <h3 style={{color:"blue", fontWeight:"400", letterSpacing:"2px"}}>My Hobbies.</h3>
                        <div className='d-flex'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
