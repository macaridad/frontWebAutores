import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AutoresList = ({autor}) => {


 /*  if (loading){
    return (
      <div className='spinner text-center'>
        <Spinner animation="border" />;
      </div>
    )
  }  */

  return (
    <>
      <div className='container' style={{marginBottom: 50}}>
        <Row xs={1} md={4} className="g-4 justify-content-center">
          {autor.map (autor =>(
            <Col className='text-center' key={autor.id}>
              <Card className='card-grid-colum card-border m-auto'>
                <Card.Body>
                  <Card.Title className='text-center'>{autor.nombre}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
