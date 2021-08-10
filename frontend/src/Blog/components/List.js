import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ products }) => {

  const handleClick = event => {
    event.preventDefault();
    console.log("handleClick click");
  }

  return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Resume</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.map(({ title, textarea }) => (
            <tr key={title}>

              <td>{title}</td>

              <td>{`${textarea.substring(0,100)}...`}</td>

              <td className="text-center">

                <Link to="/edit">
                  <i className="bi bi-pencil-square"></i>
                </Link>

                <Link onClick={handleClick} to="/delete">
                  <i className="bi bi-trash-fill"></i>
                </Link>

              </td>

            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default List
