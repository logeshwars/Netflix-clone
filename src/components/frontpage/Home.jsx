import React from 'react'
import Banner from './Banner'
import Blocks from './Blocks'
import Footer from './Footer'
import './Home.css'
import Question from './Question'
function Home() {
  return (
    <div className='home'>
        <Banner/>
        <Blocks/>
        <Question/>
        <Footer/>
    </div>
  )
}

export default Home