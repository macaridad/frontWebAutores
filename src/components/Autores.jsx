import React from 'react'
import { AutoresList } from './AutoresList'
import { AutoresPost } from './AutoresPost'
import { useFetch } from '../hooks/useFetch'
import Spinner from 'react-bootstrap/esm/Spinner'


export const Autores = () => {

  const { autores, getAutores, loading} = useFetch()

  const handleNewAutor = () =>{
    getAutores()
  }

  return (
      <>
       <div className='container-fluid'>
       <div>
         <AutoresPost onNewAutor = { handleNewAutor } />
       </div>
        <h2 className='fs-2 text-center my-5 text-primary libreria'>Listado de autores</h2>
         {loading ? 
          <div className=' spinner text-center'>
           <Spinner animation="border"/>
          </div> 
         : <AutoresList autor = {autores}/>}
       </div>
     </>
  )
}
