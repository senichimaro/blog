import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ posts }) => {

  console.log("posts",posts);



  return (
    <div className="container">
      <div className="row">
        {
          posts.map(({ id, title, body }) => (
            <div className="col-sm-12 col-md-4 col-lg-3 w-50 my-1" key={id}>

              <div className="shadow-sm rounded">
                <div className="card-body">
                  <h5 className="card-title">{
                    title.length > 20
                    ? `${title.substring(0,20)}...`
                    : title
                  }</h5>
                  <p className="card-text">{`${body.substring(0,100)}...`}</p>
                  <Link to={`${title.replace(/\s/g,'-')}/${id}`} className="btn btn-primary">Read</Link>
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
