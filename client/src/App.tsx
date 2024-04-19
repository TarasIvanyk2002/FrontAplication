import React from 'react';
import AutenticationPage from './AutenticationPage';
import { Card, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Row className='mt-5'>
        <Col></Col>
        <Col>
          <Card>
            <Card.Body>
              <AutenticationPage/>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default App;
