import React from 'react'
import Homeicon from './navbar/Homeicon'
import Searchicon from './navbar/Searchicon'
import NOtificationicon from './navbar/NOtificationicon'
import Messageicon from './navbar/Messageicon'
import Profileicon from './navbar/Profileicon'


const Navbar = () => {
  return (
    <div className='bg-transparent w-1/5 h-4/5 flex flex-row items-center justify-around border-t-2 border-r-0 fixed bottom-0.5 m-0 xl:w-1/5 xl:top-10 xl:h-full xl:my-10 xl:border-t-0 xl:border-r-2 xl:flex-col xl:items-start xl:justify-start xl:mb-10'>
        <Homeicon/>
        <Searchicon/>
        <NOtificationicon/>
        <Messageicon/>
        <div className='hidden xl:inline'>
          <Profileicon/>
        </div>
    </div>
  )
}

export default Navbar