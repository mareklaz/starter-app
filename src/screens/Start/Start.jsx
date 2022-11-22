import React from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const Start = () => {
  

  return (
    <>
      <Header subtitle='Bienvenidos a Starter'>Start</Header>
      <div className='container'>
        <div className='info'>
          <article className='start-article'>
            <h2>¿Que es starter?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloribus sapiente dolor nulla accusamus veniam harum minus animi
              voluptas culpa!
            </p>
            <Button className='btn btn-primary btn-width'>Inicio</Button>
            <Button className='btn btn-primary mr-1'>Inicio</Button>
            <Button className='btn btn-yellow mr-1'>Inicio</Button>
            <Button className='btn btn-red mr-1'>Inicio</Button>
            <Button className='btn btn-purple mr-1'>Inicio</Button>
            <Button className='btn btn-green mr-1'>Inicio</Button>
            <Button className='btn btn-blue mr-1'>Inicio</Button>
            <Button className='btn btn-light mr-1'>Inicio</Button>
          </article>

          <article className='start-article'>
            <h2>¿Porque utilizar starter?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloribus sapiente dolor nulla accusamus veniam harum minus animi
              voluptas culpa!
            </p>
          </article>
          <article className='start-article'>
            <h2>Sobre los proyectos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloribus sapiente dolor nulla accusamus veniam harum minus animi
              voluptas culpa!
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Start;
