import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signinAsync } from '../slices/authSlice';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  return (
    <div className="bg">
      <div className="form">
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="button-signin"
          onClick={() => dispatch(signinAsync({ email, password }))}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>

        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
      </div>
    </div>
  );
}
