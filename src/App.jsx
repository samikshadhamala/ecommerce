import React from 'react'
 import { Route, Routes } from 'react-router-dom'
 import Mainlayout from './layouts/Mainlayout.jsx'
import Homepages from './pages/Homepages.jsx'
import NotFound from './pages/NotFound.jsx'


 

function App() {
  return (
    <Routes>
      <Route
      path='/'
      element={<Mainlayout />}
      >
        <Route
        index
        element ={<Homepages />}
        />



    </Route>
    <Route
    path='*'
    element={<NotFound />}/>
    </Routes>
  
  )
}

export default App 