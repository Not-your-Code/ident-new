import React,{useRef} from 'react'
import './FifthSegment.css'
import { useInView } from 'react-intersection-observer'

export default function FifthSegment() {

  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px',
  });
  
  return (
    <div className='Meet'>
        <div className='container meet'>
            <div id='MeetTitle'>
                 <h2 >Meet Our Doctors</h2>
                 <h3>Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</h3>
            </div>
            <div id='Doctors' ref={ref}  className={inView ? 'fadeIn' : ''}>
              <div className='CardDoctor Card0'>
                <div id='DoctorImg'>
                  <img src={require('../../Assests/DoctorsImg/abhishek.png')} id='Doctor_img' alt=".."/>
                </div>
                <div id='AboutDoctor'>
                  <h5>Dr Abhishek Ghosh</h5>
                  <p id='Doctor_post'>Chief Dentist & HOD</p>
                  <p id='Doctor_des'>Black diagnose and treat diseases of the urinary tract in both men and women.
                    He
                     also diagnose and treat anything involving the reproductive tract in men.</p>
                 <div id='linksDoctor'>
                    <button className='readBtn' > Read More </button>
                    <div id='links'>
                       <img src={require('../../Assests/logo/facebook.png')} className='img1' alt=".."/>
                       <img src={require('../../Assests/logo/insta.png')} className='img2' alt=".."/> 
                    </div>
                 </div>
                </div>
              </div>
              <div className='CardDoctor Card1'>
                <div id='DoctorImg'>
                  <img src={require('../../Assests/DoctorsImg/abhishek.png')} id='Doctor_img' alt=".."/>
                </div>
                <div id='AboutDoctor'>
                  <h5>Dr Abhishek Ghosh</h5>
                  <p id='Doctor_post'>Chief Dentist & HOD</p>
                  <p id='Doctor_des'>Black diagnose and treat diseases of the urinary tract in both men and women.
                    He
                     also diagnose and treat anything involving the reproductive tract in men.</p>
                 <div id='linksDoctor'>
                    <button className='readBtn' > Read More </button>
                    <div id='links'>
                       <img src={require('../../Assests/logo/facebook.png')} className='img1'/>
                       <img src={require('../../Assests/logo/insta.png')} className='img2'/> 
                    </div>
                 </div>
                </div>
              </div>
              <div className='CardDoctor Card2'>
                <div id='DoctorImg'>
                  <img src={require('../../Assests/DoctorsImg/abhishek.png')} id='Doctor_img'/>
                </div>
                <div id='AboutDoctor'>
                  <h5>Dr Abhishek Ghosh</h5>
                  <p id='Doctor_post'>Chief Dentist & HOD</p>
                  <p id='Doctor_des'>Black diagnose and treat diseases of the urinary tract in both men and women.
                    He
                     also diagnose and treat anything involving the reproductive tract in men.</p>
                 <div id='linksDoctor'>
                    <button className='readBtn' > Read More </button>
                    <div id='links'>
                       <img src={require('../../Assests/logo/facebook.png')} className='img1'/>
                       <img src={require('../../Assests/logo/insta.png')} className='img2'/> 
                    </div>
                 </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
