import './Register.css'

import { useState, useEffect } from 'react'

const Register = ( ) => {

  //STATES
  const [displayName, setDisplayName]  = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("");
    setSuccess("")
    

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return 
    }

    setSuccess("Seu cadastro foi realizado com sucesso!")
    console.log(user)


  }



  return (
    <div className='div-register'>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário e compartilhe as suas histórias!</p>
      


      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
            type="text"
            name='name'
            required
            placeholder='Nome do usuário'
            value={displayName}
            onChange={({target}) => setDisplayName(target.value)}
          />
        </label>
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
        <label>
          <input 
            type="password"
            name='confirmPassword'
            required
            placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={({target}) => setConfirmPassword(target.value)}
          />
        </label>
        <button className='btn-primary'>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
      </form>
    </div>
  );
}

export default Register;