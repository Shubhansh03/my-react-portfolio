import React from 'react'
import MakeContact from './MakeContact'
import Navbar from './Navbar'

const ContactMe = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="mx-auto container px-8">
        <Navbar/>
        <MakeContact/>
      </div>
    </div>
  )
}

export default ContactMe