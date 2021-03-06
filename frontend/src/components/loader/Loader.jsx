import React from 'react'
import "./loader.css"
import { Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <>
      <Spinner animation="border" role="status" className='loader'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  )
}

export default Loader;