import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {Theme} = useContext(ContextGlobal)
  return (
    <footer style={{background:Theme.backgroundNavbar, color:Theme.color}}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
        {/* <div>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </div>  */}
    </footer>
  )
}
// style={{background:Theme.backgroundNavbar, color:Theme.color}}
export default Footer
