import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  /* const token = useSelector((state) => state.auth.token);
  console.log('token', token); 
  return token ? children : <Route to="/" />; */
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      navigate('/'); // redirecting user to "/" if there's no token
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  if (!token) {
    return null; // or some loading spinner while redirection is happening
  }

  return children; // token is present, so render the protected content
};



export default ProtectedRoute;