// Import
import React, { useState } from 'react';
import { useFormik } from 'formik';
import LoginFormSchema from './LoginFormSchema';
import Button from '../../Button/Button';
// Screens

// Componentes

// App
const INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formSend, setFormSend] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    onSubmit: onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: LoginFormSchema,
    // validateOnBlur: LoginFormSchema,
    validateOnBlur: false,
  });

  function onSubmit(values) {
    resetForm();
    console.log('Values', values);
    console.log('Formulario Enviado');
    setFormSend(true);
    setTimeout(() => {
      setFormSend(false);
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className='register-form'>
      <div className='register-element'>
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type='email'
          id='email'
          placeholder='Escribe tu correo'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
        />
        <span className='errors'>
          {errors.email ? <span className='errors'>{errors.email}</span> : ''}
        </span>
      </div>
      <div className='register-element'>
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type='password'
          id='password'
          placeholder='Escribe tu contraseña'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
        />
        <span className='errors'>
          {errors.password ? (
            <span className='errors'>{errors.password}</span>
          ) : (
            ''
          )}
        </span>
      </div>

      <Button type='submit' className='btn'>
        Login
      </Button>
      {formSend && <span className='form-send'>Formulario Enviado!</span>}
    </form>
  );
};

export default LoginForm;
