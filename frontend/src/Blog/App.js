import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap-icons/font//bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'

export default function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Nav />
          <HomePage />
        </Route>

        <Route exact path="/new">
          <Nav />
          <FormPage />
        </Route>

        <Route exact path="/edit">
          <Nav />
          <FormPage />
        </Route>

      </Switch>
    </Router>
  )
}
