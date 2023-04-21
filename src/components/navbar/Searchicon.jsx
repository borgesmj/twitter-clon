import React from 'react'
import { FaSearch } from "react-icons/fa";


const Searchicon = () => {
  return (
    <div>
        <div className="home-icon text-3xl text-white mb-10">
            <a href="#" className='hover:bg-slate-50 hover:text-black rounded-2xl flex flex-row xl:px-5 xl:items-center'>
                <FaSearch/>
                <h3 className='hidden xl:inline xl:px-3'>Explorar</h3>
            </a>
        </div>
    </div>
  )
}

export default Searchicon