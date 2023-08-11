import React from 'react'
import './styles.css'
import rio1 from '../../assets/photos/rio1.jpg'

const Contact = () => {
  return (
    <div className='contact-container'>
      
      <img className='video' src={rio1} />
      
          <h1>CONTACT</h1>

          <div style={{ height: "50%"}} className='contact-info'>

            <span className='mgmt'> MGMT: TRASHDIDTHIS@GMAIL.COM </span>

          </div> 


  </div>
  )
}

export default Contact