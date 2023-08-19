import React from 'react';
import axios from 'axios';

const Login = () => {
  const obtainAuthToken = async () => {
    try {
      const response = await axios.post('http://20.244.56.144/train/auth', {
        // Authentication data
      });
      console.log('Authorization token obtained:', response.data.access_token);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={obtainAuthToken}>Obtain Token</button>
    </div>
  );
};

export default Login;
