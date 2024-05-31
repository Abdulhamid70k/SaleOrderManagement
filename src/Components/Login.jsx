// login.jsx

import React, { useState } from 'react';
import { Box, Button, Input, VStack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State hooks for storing username and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login when the login button is clicked
  const handleLogin = () => {
    if (username === 'abdul' && password === '12345') {
      // If credentials are correct, store authentication status in localStorage
      localStorage.setItem('authenticated', 'true');
      navigate('/active-orders'); // Redirect to active orders page
    } else {
      alert('Invalid credentials'); // Show alert for invalid credentials
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;
