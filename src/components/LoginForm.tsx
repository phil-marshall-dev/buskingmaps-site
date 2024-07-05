// src/pages/Login.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = useStore(state => state.loginUser);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      loginUser(username, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
