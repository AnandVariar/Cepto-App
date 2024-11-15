import React, { useContext, useState } from 'react'
import axios from 'axios'
import './LogIn.css'
import { assets } from '../../assests/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const LogIn = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext)

    const [currState, setCurrState ] = useState('Log-In')
    const [data, setData ] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) => {
      event.preventDefault();
      let newUrl = url
      if(currState==='Log-In') {
        newUrl += '/api/user/login'
      }else {
        newUrl += '/api/user/register'
      }
      const response = await axios.post(newUrl,data);
      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
      }
      else {
        alert(response.data.message)
      }
    }

  return (
    <div className='login'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-title">
            <h2>{ currState }</h2>
            <img  onClick={() => setShowLogin( false )} src={ assets.cross_icon} alt='' />
        </div>
        <div className="login-popup-input">
            { currState === 'Log-In'?<></>:<input name='name' onChange={onChangeHandler} value={ data.name} type="text" placeholder='Your Name' required />}
            <input name='email' onChange={ onChangeHandler} value={ data.email} type='mail' placeholder='Your Mail' required />
            <input name='password' onChange={ onChangeHandler} value={ data.password}  type='password' placeholder='Password' required />
        </div>
        <button type='submit'>{ currState === 'Sign up'?"Create Account":'Log-In'}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required />
            <p>Buy continuing, i agree to the terms of use and privacy policy </p>
        </div>
        {
            currState === 'Log-In'?<p>Create a new Account? <span onClick={() => setCurrState('Sign-UP')}>Click Here</span></p> 
            : <p>Already have an Account?<span onClick={() => setCurrState('Log-In')}>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default LogIn
