import React from 'react'
import { Link } from 'react-router-dom'


const Loading = () => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <p>No products to show</p>
      <Link className="btn btn-success" to="/new">Create Product</Link>
    </div>
  )
}

export default Loading
