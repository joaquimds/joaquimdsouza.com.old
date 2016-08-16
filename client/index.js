import './styles/app.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import Store from './store'

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
