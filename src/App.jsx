import { useState } from 'react'
import { Dashboard, Footer, Navbar, Login, Carousel, Header } from "./index"

function App() {


  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Navbar />
      <Dashboard />
      {/* <Carousel /> */}
      <Footer />
    </div>
  )
}

export default App
