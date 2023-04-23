import React from 'react'
import Homeicon from './navbar/Homeicon'
import Profileicon from './navbar/Profileicon'
import Tweetbutton from './Tweetbutton'
// el nombre Homeicon fue antes de tener todos los iconos en un arreglo e iterar en un mismo cogido


const Navbar = () => {
  return (
    <div className='bg-transparent w-full h-20 flex flex-row items-center justify-around fixed bottom-0.5 m-0 xl:w-1/5 xl:top-10 xl:h-full xl:my-10  xl:flex-col xl:items-start xl:justify-start xl:mb-10'>
        <Homeicon/>
        <div className='hidden xl:inline'>
          <Profileicon/>
        </div>
    </div>
  )
}

export default Navbar