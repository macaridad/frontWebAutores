import React from 'react'
import { Link } from 'react-router-dom'
import { LibrosList } from './LibrosList'
/* import { ComentariosList } from './ComentariosList' */
import { Button } from 'react-bootstrap'

export const Libros = () => {


    return (
    <>
      <h2 className='fs-2 text-center my-5 text-primary libreria'>Encuentre libros y sus autores:</h2>

      <LibrosList />
    </>
  )
}
