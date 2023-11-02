import React from 'react'
import { ComentariosList } from './ComentariosList'
import { useFetchComents } from '../hooks/useFetchComents'
import Spinner from 'react-bootstrap/esm/Spinner'


export const Comentarios = ({inputValue}) => {

  const { comentarios, loading} = useFetchComents(inputValue)

  return (
      <>
       <div className='container-fluid'>
        <h2 className='fs-2 text-center my-5 text-primary libreria'>Listado de Comentarios</h2>
         {loading ? 
          <div className=' spinner text-center'>
           <Spinner animation="border"/>
          </div> 
         : <ComentariosList comentario = {comentarios}/>}
       </div>
     </>
  )
}
