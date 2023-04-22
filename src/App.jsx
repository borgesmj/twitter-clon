import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Twittericon from './components/Twittericon'
import Tweetbutton from './components/Tweetbutton'
import Tweetform from './components/Tweetform'

function App() {

  return (
    <> <div className='flex flex-col'>
            <div className='w-full h-20 flex flex-row'>
                    <div className='w-1/5 h-full xl:flex xl:justify-center xl:items-center'>
                      <Twittericon/>
                    </div>
                    <div className='hidden w-3/5 h-full text-white xl:flex xl:justify-center xl:items-center'>
                      <h1 className='text-4xl'>Inicio</h1>
                    </div>
                    <div className='w-1/5 h-full'></div>
            </div>
            <div className='w-full h-96 flex flex-row'>
                    <div className='xl:w-1/5 xl:h-full fixed'>
                                <Navbar/>
                                <Tweetbutton/>
                    </div>
                    <div className='w-full h-10 text-white ml-80  xl:w-3/5 xl:h-96'>
                      <Tweetform/>
                    </div>
                    <div className='w-1/5 h-full'></div>


            </div>
        </div>

    </>
  )
}

export default App
