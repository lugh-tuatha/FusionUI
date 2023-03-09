import React from 'react'
import './footer.css'
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";

function Footer() {
  return (
    <div className='w-100 footer'>
      <div className="row">
        <div className="col-lg-4">
          <h3 className='fw-bold text-center'>Who are we ?</h3>

          <div className='info text-center w-75 mx-auto'>
            <img src="https://th.bing.com/th/id/OIG.3OGaCigDVDY2jLaZgjcc?pcl=1b1a19&pid=ImgGn" className='img-fluid my-4'/>
            <p className='w-75 mx-auto'>“We are Fusion UI, passionate about creating stunning user interfaces that are both functional and beautiful”</p>
            <div className="d-flex align-items-center w-75 mx-auto my-2 gap-2">
              <HiIcons.HiLocationMarker size={24}/>
              <p className='my-auto'>123 Main Street, Anytown, USA 12345</p>
            </div>
            <div className="d-flex align-items-center w-75 mx-auto my-2 gap-2">
              <AiIcons.AiFillPhone size={24}/>
              <p className='my-auto'>09087105298</p>
            </div>
            <div className="d-flex align-items-center w-75 mx-auto my-2 pb-4 gap-2">
              <HiIcons.HiMail size={24}/>
              <p className='my-auto'>FusionUI@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div >
            <div className="links">
              <h3 className='fw-bold'>Quick Links</h3>
              <p><a href="#">Home</a></p>
              <p><a href="#">Docs</a></p>
              <p><a href="#">Components</a></p>
              <p><a href="#">Blogs</a></p>
              <p><a href="#">Showcase</a></p>
            </div>
            <div className="devs">
              <h3 className='fw-bold'>Want to hire us?</h3>
              <p><a href="#">The Developers</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer