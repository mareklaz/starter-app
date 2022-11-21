// Import
import React, { useState } from 'react';
import { useFormik } from 'formik';
import RegisterFormSchema from './RegisterFormSchema';
import Button from '../../Button/Button';
// Screens

// Componentes

// App
const INITIAL_VALUES = {
  name: '',
  email: '',
  profile: '',
};

const RegisterForm = () => {
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
    validationSchema: RegisterFormSchema,
    // validateOnBlur: RegisterFormSchema,
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
        {/* <label htmlFor='name'>Usuario</label> */}
        <input
          type='text'
          id='name'
          placeholder='Escribe tu nombre de usuario'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
        />
        <span className='errors'>
          {errors.name ? <span className='errors'>{errors.name}</span> : ''}
        </span>
      </div>
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
        Registrar
      </Button>
      {formSend && <span className='form-send'>Formulario Enviado!</span>}
    </form>
  );
};

export default RegisterForm;
