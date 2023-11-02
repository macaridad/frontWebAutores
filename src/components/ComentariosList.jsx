import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const ComentariosList = ({comentario}) => {
  return (
    <>
    <div className='container m-auto' style={{marginBottom: 50}}>
      <Row xs={1} md={1} className="g-4 mb-5">
        {comentario.map (comentario =>(
          <Col className='text-center' key={comentario.id}>
            <Card className='card-grid-colum card-border m-auto'>
              <Card.Body>
                <Card.Title className='text-center'>{comentario.contenido}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </>
  )
}
