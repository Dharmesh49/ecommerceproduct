import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../HeaderComponent/Header';

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/home');
    }
  });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  async function signup() {
    let item = { name, password, email };
    console.warn(item);

    let result = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    history.push('/home');
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
          required
        />
        <br />
        <button onClick={signup} className="btn-btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Register;
