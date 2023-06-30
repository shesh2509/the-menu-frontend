import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const loginstate = useSelector(state=>state.loginUserReducer)
  const {loading, error} = loginstate
  const dispatch = useDispatch()

  function login(){
    const user = {email, password}
    dispatch(loginUser(user))
  }

  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      window.location.href = '/'
    }
  })

  return (
    <div>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
            <h2 className='mt-2' style={{fontSize: '40px'}}>Login</h2>

              {loading && (<Loading/>)}
              {error && (<Error error='Invalid Credentials'/>)}

            <div>
              <input
                required
                type='text'
                placeholder='email'
                className='form-control'
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
              <input
                required
                type='password'
                placeholder='password'
                className='form-control'
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
              />
              <button onClick={login} className='btn mt-3 mb-3'>LOGIN</button>
              <br/>
              <a style={{color:'black'}} className='mt-2' href='/register'>Click Here To Register</a>
            </div>
          </div>
        </div>
    </div>
  )
}
