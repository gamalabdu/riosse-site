import React, { useState } from 'react'
import './styles.css'
import rio1 from '../../assets/photos/rio1.jpg'


interface ISecretPage {
    setPassword : Function
    password: boolean
}

const SecretPage = (props: ISecretPage) => {

const {setPassword, password} = props

const [secretPassword, setSecretPassword] = useState<string>('')

const handleClick = () => {

    if (secretPassword === 'verano23') {
        setPassword(true)
    }

}

const handleKeyPress = (event : string) => {
  if(event === 'Enter' && secretPassword === 'verano23'){

    setPassword(true)
    
  }
}


  return (

    <div className='secret-container'>
      
        
          <div style={{ color:"white", padding:"0 5%", fontSize:"20px"}}> Password </div>
          
          <input className='secret-input' placeholder='type password here' value={secretPassword} onInput={(e) => setSecretPassword(e.currentTarget.value)} />

          <button className='secret-button' onKeyDownCapture={(e) => handleKeyPress(e.key)} onClick={handleClick}> Submit </button>

  </div>
  )
}

export default SecretPage