import React from 'react'
import '../../Components/GlobalLayout/Navbar/Navbar'
import TopContent from '../../Components/GlobalLayout/Navbar/TopContent/TopContent'
import Footer from '../../Components/GlobalLayout/footer/Footer'


import './Home.css'



import FirstSegment from '../../Components/FirstSegement/FirstSegment'
import SecondSegment from '../../Components/SecondSegment/SecondSegment'
import Providing from '../../Components/ThidSegment/Providing'
import FourthSegment from '../../Components/FourthSegment/FourthSegment'
import FifthSegment from '../../Components/FifthSegment/FifthSegment'
import SixthSegment from '../../Components/SixthSegment/SixthSegment'



import Navbar from '../../Components/GlobalLayout/Navbar/Navbar'


export default function Home() {
  return (
    <div className='home'>
      <div>
        <TopContent />
        <Navbar />
      </div>
      <div className='FirstSegement'>
        <FirstSegment />
      </div>
      <div className='SecondSegment'>
        <SecondSegment/>
      </div>
      <div className='ThirdSegment'>
        <Providing />
      </div>
       <div className='FourthSegment'>
        <FourthSegment />
      </div>
      <div className='FifthSegment'>
        <FifthSegment />
      </div>
      <div className='SixthSegment' >
       
        <SixthSegment />
        
        
      </div>
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>

  )
}
