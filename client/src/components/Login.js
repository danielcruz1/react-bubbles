import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {

  const [user, setUser] = useState ('');
  const [password, setPassword] = useState ('');

  const useHandler = e => {
    e.preventDefault();
    setUser(e.target.value)
   };

  const passwordHandler = e => {
    e.preventDefault();
    setPassword(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
  let credentials = {
    username: user,
    password: password
  }

  axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {localStorage.setItem ('token', res.data.payload)
    props.history.push('/bubble-page');
    })
    .catch(err => console.log('error', err.response
    ))
      setUser('');
      setPassword('')
  }	

  return (
    <>  
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={handleSubmit}>
           <input type="text" value={user} onChange={useHandler} placeholder="username" />
          <input type="password" value={password} onChange={passwordHandler} placeholder="password" />
          <button>Login</button>
        </form>
    </>	    
  )
}

export default Login;