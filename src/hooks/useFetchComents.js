import { useState, useEffect} from 'react'

export const useFetchComents = ( inputValue ) => {

    const [comentarios, setComentarios] = useState([])
    const [loading, setLoading] = useState(true)

    const getComentarios = async () => {
      try {
        const url = `https://magaliabratte-001-site1.itempurl.com/api/libros/${inputValue}/comentarios`
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
      
      const comentariosData = data.map ( coment => ({
        id: coment.id,
        contenido: coment.contenido
      }))

      return setComentarios(comentariosData)

      } catch (error) {
        alert('Problema de conexion con el servidor, intente nuevamente');
      } finally{
        setLoading (false)
      }
  }

  useEffect(() => {
    setLoading(true)
    getComentarios();
  }, [])
  
  return {
    comentarios,
    loading
  }
}
