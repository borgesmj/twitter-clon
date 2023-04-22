import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Twittericon from './components/Twittericon'

function App() {

  return (
    <> <div className='flex flex-col'>
            <div className='w-full h-20 flex flex-row'>
                    <div className='w-1/5 h-full xl:flex xl:justify-center xl:items-center'>
                      <Twittericon/>
                    </div>
                    <div className='w-3/5 h-full'></div>
                    <div className='w-1/5 h-full'></div>
            </div>
            <div className='w-full h-96 flex flex-row'>
                    <div className='w-1/5 h-full'>
                                <Navbar/>
                    </div>
                    <div className='w-3/5 h-full text-white ml-6'>
                    </div>
                    <div className='w-1/5 h-full'></div>


            </div>
        </div>

    </>
  )
}

export default App
