import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ posts }) => {

  // console.log("posts",posts);



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
                  <Link to={`${title.replace(/\s/g,'-')}/${_id}`} className="btn btn-primary">Read</Link>
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
