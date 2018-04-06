import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'babel-polyfill'

const rootElement = document.getElementById('app')

const renderApp = element => {
  const App = require('./App').default
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    element
  )
}

renderApp(rootElement)

module.hot && module.hot.accept('./App.js', () => renderApp(rootElement))
