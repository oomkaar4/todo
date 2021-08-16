import React from 'react'

const About = () => {
    let style={
        color:'blue',
        fontSize:"1.4rem",
        boxSizing:'contentBox',
        width:'936px',
        height:'300px',
        padding:'30px',
        border:'3px solid black',
        textShadow:".2px .5px black"
        

    }
    return (
        <div className="container"> 
            <h2 className="ml-5 p-2">This is an Component</h2>
            <p className="mr-3 p-3" style={style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    )
}

export default About;
