import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Propagate the error to handle in the component
    }
  };

  const signup = async (username, email, password) => {
    try {
      const response = await axios.post('/api/auth/signup', { username, email, password });
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Signup failed:', error);
      throw error; // Propagate the error to handle in the component
    }
  };

  const logout = () => {
    setAuthToken(null);
    // Additional cleanup if needed (e.g., clear localStorage)
  };

  return (
    <AuthContext.Provider value={{ authToken, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
