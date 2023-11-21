import './Login.css'

import React from 'react';
import { useState, useEffect } from 'react'
import { useAuthenticator } from '../../hooks/useAuthenticator';

const Login = ( ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState("");
 

  const {error: authError, loading, login} = useAuthenticator();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("");
  
    
    const user = {
      email,
      password
    };

    const res = await login(user)
    console.log(res)
  } 

  return (
    <div className='div-login'>
      <h2>Entrar</h2>
      <p>Faça login para entrar no seu perfil</p>

    <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input 
            type="email"
            name='email'
            required
            placeholder='Email do usuário'
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type="password"
            name='password'
            required
            placeholder='senha do usuário'
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />
          </label>
          {loading && <button  className='btn-primary' disabled>carregando...</button>} 
          {!loading && <button className='btn-primary'>Entrar</button>}
          {authError && <p className='error'>{authError}</p>}
          
    </form>
    </div>
  );
}

export default Login ;