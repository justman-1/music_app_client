import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main'


const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
)
