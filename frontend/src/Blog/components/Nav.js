import React, { useState, useEffect } from 'react'
import {
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

import { appConfig } from '../../config'

const Nav = () => {
  const { path } = useRouteMatch();
  const [isLocation, setIsLocation] = useState('')

  const changeActiveClass = event => {
    let link = document.getElementsByClassName('nav-link active')
    if( link[0] ) link[0].className = "nav-link"
    event.target.className ="nav-link active"
  }

  const { title } = useParams()

  useEffect(() => {
    appConfig.routes.map( ({ url, name }) => (
      path === url
      ? setIsLocation( name )
      : setIsLocation( title )
    ))
  })



  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <i className="bi bi-terminal-fill fs-1"></i>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
              {
                appConfig.routes.map( ({ url, name }) => (
                  <li className="nav-item" key={name}>
                    <Link onClick={changeActiveClass} className={ path === url ? "nav-link active" : "nav-link"} to={url} >{name}</Link>
                  </li>
                ) )
              }
            </ul>
          </div>

        </div>
      </nav>

      <header className="pb-3 border-bottom my-5">
        <h1 className="h4">
          <span>Location : {isLocation}</span>
        </h1>
      </header>

    </>
  )
}

export default Nav
