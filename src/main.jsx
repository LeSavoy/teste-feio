import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from '../src/components/Header'
import Main from '../src/components/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
)
