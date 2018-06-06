import React from 'react'
import { render } from 'react-dom'
import Layout from './Layout'

if (module.hot) {
  module.hot.accept()
}

// render the app
render(<Layout />, document.getElementById('app'))
