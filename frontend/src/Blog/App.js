import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// imports
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap-icons/font//bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// config
import { appConfig } from '../config'

// Pages
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import BlogPost from './pages/BlogPost'

// components
import Nav from './components/Nav'

export default function App() {
  return (
    <Router>
      <Switch>

          {
            appConfig.routes.map(({url,name}) => (

                name === 'New' ?
                <Route exact path={url} key={name}>
                  <Nav />
                  <FormPage />
                </Route>

                : name === 'Home' ?
                <Route exact path={url} key={name}>
                  <Nav />
                  <HomePage />
                </Route>

                : null
            ))
          }


          <Route path={`/post/edit/:id`}>
            <Nav />
            <FormPage />
          </Route>

          <Route path="/:title/:id">
            <Nav />
            <BlogPost />
          </Route>



      </Switch>
    </Router>
  )
}
