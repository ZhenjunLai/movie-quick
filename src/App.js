import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../src/pages/home/index'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
