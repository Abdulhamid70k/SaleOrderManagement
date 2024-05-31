// Navbar.jsx

import React from 'react';
import { Box, Flex, Button, useColorMode, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Hook for toggling color mode between light and dark
  const { colorMode, toggleColorMode } = useColorMode();

  // Function to handle logout action
  const handleLogout = () => {
    localStorage.removeItem('authenticated'); // Remove authentication status
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <Flex as="nav" p="4" bg="gray.800" color="white" align="center">
      <Box>
        <Link to="/active-orders" style={{ marginLeft: '1rem', color: '#dbdfdf', fontWeight: '500', fontSize: '1vw',}}>Active Orders</Link>
        <Link to="/completed-orders" style={{ marginLeft: '1rem', color: '#dbdfdf', fontWeight: '500', fontSize: '1vw'}}>
          Completed Orders
        </Link>
      </Box>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <Button onClick={handleLogout} ml="4">
        Logout
      </Button>
    </Flex>
  );
};

export default Navbar;
