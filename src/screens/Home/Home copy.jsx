import React, { useState } from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';

const Home = () => {
  const [formSelected, setFormSelected] = useState(false);
  console.log(formSelected);
  return (
    <div className='home-container'>
      <div className='home-logo-container'>
        <RocketLaunchIcon />
        <h1>Starter</h1>
      </div>
      <div className='home-form-container'>
        {formSelected === false ? (
          <>
            <h2>Registro</h2>
            <RegisterForm />
            <p>
              ¿Estas registrador?{' '}
              <button
                type='button'
                onClick={() => {
                  setFormSelected(true);
                }}
                className='btn-link btn-link-yellow'
              >
                Login
              </button>
            </p>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <LoginForm />
            <p>
              ¿No estas registrado?{' '}
              <button
                type='button'
                onClick={() => {
                  setFormSelected(false);
                }}
                className='btn-link btn-link-yellow'
              >
                Crear cuenta
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

export const handleFormChange = (status) => {
  setFormSelected(status);
};
