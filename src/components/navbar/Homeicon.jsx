import React from 'react'
import { FaHome } from "react-icons/fa";

const Homeicon = () => {
  return (
    <div>
        <div className="home-icon text-3xl text-white mb-10">
            <a href="#" className='hover:bg-slate-50 hover:text-black rounded-2xl flex flex-row xl:px-5 xl:items-center'>
                <FaHome/>
                <h3 className='hidden xl:inline xl:px-3'>Home</h3>
            </a>
        </div>
    </div>
  )
}

export default Homeicon