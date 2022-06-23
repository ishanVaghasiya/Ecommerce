import React from 'react'
import { Container,  Row, Col } from 'react-bootstrap'
import error from "../../assets/error.svg"
import "./error.css"

const Error = () => {
  return (
    <>

      <Container>
        <Row>
          <Col className='svgPic'>
            <img src={error} alt="" />
          </Col>
        </Row>
      </Container>

    </>

  )
}

export default Error