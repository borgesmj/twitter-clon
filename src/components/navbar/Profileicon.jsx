import React from 'react'
import { FaUserAlt } from "react-icons/fa";


const Profileicon = () => {
  return (
    <div>
        <div className="home-icon text-2xl text-white mb-10">
            <a href="https://github.com/borgesmj/" target="blank" className='hover:bg-slate-50 hover:text-black rounded-2xl flex flex-row xl:px-5 xl:items-center'>
                <FaUserAlt/>
                <h3 className='hidden xl:inline xl:px-3'>Perfil</h3>
            </a>
        </div>
    </div>
  )
}

export default Profileicon