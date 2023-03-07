import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Button from './components/button'
import Searchbar from './components/searchbar'
import Subscription from './components/subscription'
import Cholo from './components/cholo'


function App() {

  return (
    <div className="App">
      <Header />
      <section className='getStarted d-flex align-items-center justify-content-center'>
        <div>
          <h2 className='text-center mx-auto'>Revolutionize Your Web Design with Our Custom CSS Framework</h2>
          <p className='text-center m-0 mx-auto'>Effortlessly create stunning and responsive web designs with our intuitive and flexible CSS framework</p>
          <div className='d-flex search gap-5'>
            <Button />
            <Searchbar />
          </div>
        </div>
      </section>
      <Cholo />
    </div>
  )
}

export default App
