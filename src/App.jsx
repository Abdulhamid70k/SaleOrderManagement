import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Components/Login';
import ActiveOrders from './pages/ActiveOrders';
import CompletedOrders from './pages/CompletedOrders';
import Navbar from './Components/Navbar';

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  return localStorage.getItem('authenticated') ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public login route */}
          <Route path="/login" element={<Login />} />
          {/* Private routes */}
          <Route
            path="/active-orders"
            element={
              <PrivateRoute>
                <ActiveOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/completed-orders"
            element={
              <PrivateRoute>
                <CompletedOrders />
              </PrivateRoute>
            }
          />
          {/* Fallback route to redirect to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
