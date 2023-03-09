import React from 'react'
import './footer.css'
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";

function Footer() {
  return (
    <div className='w-100 footer'>
      <div className="row">
        <div className="col-lg-4 who-are-we">
          <h3 className='fw-bold text-center'>Who are we ?</h3>

          <div className='info mt-2 w-75 mx-auto'>
            <div className="text-center">
              <img src="https://th.bing.com/th/id/OIG.3OGaCigDVDY2jLaZgjcc?pcl=1b1a19&pid=ImgGn" className='img-fluid my-3'/>
            </div>
            <p className='w-75 mx-auto text-center'>“We are Fusion UI, passionate about creating stunning user interfaces that are both functional and beautiful”</p>
            <div className="d-flex w-75 mx-auto my-2 gap-2">
              <HiIcons.HiLocationMarker size={32}/>
              <p className='my-auto'>123 Main Street, Anytown, USA 12345</p>
            </div>
            <div className="d-flex w-75 mx-auto my-2 gap-2">
              <AiIcons.AiFillPhone size={24}/>
              <p className='my-auto'>09087105298</p>
            </div>
            <div className="d-flex w-75 mx-auto my-2 pb-4 gap-2">
              <HiIcons.HiMail size={24}/>
              <p className='my-auto'>FusionUI@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-7 ms-5 d-flex">
          <div>
            <h3 className='fw-bold'>Quick Links</h3>
            <div>
              <div className="links mt-2">
                <p><a href="#">Home</a></p>
                <p><a href="#">Docs</a></p>
                <p><a href="#">Components</a></p>
                <p><a href="#">Blogs</a></p>
                <p><a href="#">Showcase</a></p>
              </div>
              <h3 className='fw-bold'>Want to hire us?</h3>
              <div className="devs">
                <p><a href="#">The Developers</a></p>
              </div>
            </div>
          </div>

          <div className='contact'>
            <h3 className='fw-bold'>How we can help you ?</h3>
            <form className='p-4'>
              <div className="d-flex gap-3 ">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Last name' />
              </div>
              <input type="email" placeholder='Email' className='mt-3'/> <br />
              <textarea rows="7" placeholder='message' className='mt-3'/> <br />
              <input type="submit" value="Send" className='px-4'/>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer