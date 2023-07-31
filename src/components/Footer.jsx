import React from 'react'

function Footer()  {

    const currentyr=new Date().getFullYear();

  return (
    <footer> 
      <p>
    Copyright © {currentyr}
     </p>
    </footer>
 
  )
}

export default Footer;