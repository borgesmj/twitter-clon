import React from 'react'
import { FaEnvelope } from "react-icons/fa";


const Messageicon = () => {
  return (
    <div>
        <div className="home-icon text-3xl text-white mb-10">
            <a href="#" className='hover:bg-slate-50 hover:text-black rounded-2xl flex flex-row xl:px-5 xl:items-center'>
                <FaEnvelope/>
                <h3 className='hidden xl:inline xl:px-3'>Mensajes</h3>
            </a>
        </div>
    </div>
  )
}

export default Messageicon