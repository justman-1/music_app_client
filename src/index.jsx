import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Signin from './views/Signin'
import Signup from './views/Signup'


const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
)
