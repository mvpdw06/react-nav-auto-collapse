import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

import './index.css'
import NavBarController from './NavBarController'

const App = () => (
  <NavBarController>
    <Container />
  </NavBarController>
)

const Container = () => (
  <div className="contrainer">
    <a href="#" id="brand">
      Brand
    </a>
    <Buttons />
    <NavBarMenu />
  </div>
)

const Buttons = () => (
  <button>
    <span />
    <span />
    <span />
  </button>
)

const NavBarMenu = () => (
  <ul className="navbar-menu">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">page a</a>
    </li>
    <li>
      <a href="#">page b</a>
    </li>
    <li>
      <a href="#">page c</a>
    </li>
    <li>
      <a href="#">page d</a>
    </li>
  </ul>
)

export default App
