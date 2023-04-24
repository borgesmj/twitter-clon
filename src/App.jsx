import { useEffect, useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Twittericon from './components/Twittericon'
import Tweetbutton from './components/Tweetbutton'
import Tweetform from './components/Tweetform'
import Tweetlist from './components/Tweetlist'

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const obtenerLS = () => {
      const tweetsLS = JSON.parse(localStorage.getItem('tweets')) ?? []

      setTweets(tweetsLS)
    }
    obtenerLS()
  }, [])
  
  useEffect (() => {

    localStorage.setItem('tweets', JSON.stringify(tweets))
},[tweets])
  return (
    <> 
        <div className='flex flex-col'>
            <div className='xl:w-full xl:h-20 xl:flex xl:flex-row '>
                    <div className='w-full h-10  xl:w-1/5 '>
                      <Twittericon/>
                    </div>
                    <div className='hidden xl:inline xl:w-3/5'>
                      <h1 className='text-4xl text-white'>Inicio</h1>
                    </div>
                    <div className='hidden xl:inline xl:w-1/5 text-white xl:ml-10'>barra de busqueda</div>
            </div>
            <div className='justify-between h-full flex flex-col-reverse xl:flex-row xl:w-full'>
                    <div className='xl:w-1/5  border-t-2 border-r-0 xl:border-t-0 xl:border-r-2'>
                                <Navbar/>

                    </div>
                    <div className='xl:w-3/5 xl:ml-5 xl:border-t-0 xl:border-r-2'>
                      <Tweetform
                      tweets={tweets}
                      setTweets={setTweets}
                      />
                      <Tweetlist
                      tweets={tweets}
                      />

                    </div>
                    <div className='hidden xl:inline xl:w-1/5 text-white xl:ml-10'><Tweetbutton/></div>
            </div>
        </div>

    </>
  )
}

export default App
