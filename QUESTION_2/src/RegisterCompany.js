import React from 'react';
import axios from 'axios';

const RegisterCompany = () => {
  const registerCompany = async () => {
    try {
      const response = await axios.post('http://20.244.56.144/train/register', {
        // Register company data
      });
      console.log('Company registered:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register Company</h2>
      <button onClick={registerCompany}>Register</button>
    </div>
  );
};

export default RegisterCompany;
