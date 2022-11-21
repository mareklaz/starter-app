import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-logo-container'>
        <RocketLaunchIcon />
        <h1>Starter</h1>
      </div>
      <div className='home-form-container'>
        <h2>Registro</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Home;
