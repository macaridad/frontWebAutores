import React from 'react'
import { Link } from 'react-router-dom'
import libros from "../assets/background.jpg"

export const Home = () => {
  return (
    <div className='container back'>
        <h1 className='fs-1 text-center my-5 text-primary libreria'>Bienvenidos al blog</h1>

        <div className='btn-group d-flex justify-content-center '>
         <Link to= '/autores' className='btn btn-primary mb-4 button'>Lista de autores</Link>
         <br />
         <Link to= '/libros' className='btn btn-primary mb-4 button'>Busqueda de libros y sus autores</Link>
        </div>
        <div className='text-center'>
          <img src={libros} width={350} height={350} className='text-center'/>
        </div>

        
    </div>
  )
}
