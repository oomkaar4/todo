import React from 'react'

 const Footer = () => {
     let footerStyle={
         position: "relative",
         top: "50vh",
         width: "100%",
        
     }
    return (
        <footer className="bg-dark text-light m-1" style={footerStyle} >
        <p className="text-center">©MyTodosList</p>
            
        </footer>
    )
}
export default Footer;