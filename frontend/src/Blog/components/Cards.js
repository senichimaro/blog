import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ posts, handleDelete }) => {

  const _handleDelete = async event => {
    event.preventDefault();
    const idPost = event.target.getAttribute('name')
    if( idPost ) handleDelete( idPost )
  }

  return (
    <div className="container">
      <div className="row">
        {
          posts.map(({ _id, title, textarea, imgUrl }) => (
            <div className="col-sm-12 col-md-4 col-lg-3 w-50 my-1" key={_id}>

              <div className="shadow-sm rounded">
                <img src={imgUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{
                    title.length > 20
                    ? `${title.substring(0,20)}...`
                    : title
                  }</h5>
                  <p className="card-text">{`${textarea.substring(0,100)}...`}</p>
                  <div className="d-flex justify-content-between align-items-end">
                    <Link to={`${title.replace(/\s/g,'-')}/${_id}`} className="btn btn-primary">Read</Link>

                    <Link to={`/post/edit/${_id}`}>
                      <i className="bi bi-pencil-square"></i>
                    </Link>

                    <Link onClick={_handleDelete} to={`/post/delete`} >
                      <i className="bi bi-trash-fill" name={ _id }></i>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card
