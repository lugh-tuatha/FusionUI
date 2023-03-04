import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Button from './components/button'

function App() {

  return (
    <div className="App">
      <section className=''>
        <Header />
        <h2>Revolutionize Your Web Design with Our Custom CSS Framework</h2>
        <p>Effortlessly create stunning and responsive web designs with our intuitive and flexible CSS framework</p>
        <Button />
      </section>

    </div>
  )
}

export default App
