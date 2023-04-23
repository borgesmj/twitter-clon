import React, { useState } from 'react'

const Tweetform = ({counter, setCounter}) => {
      const [tweet, setTweet] = useState('')
      const [date, setDate] = useState('')


      const handleSubmit = (e) => {
        e.preventDefault

        if([tweet].includes('',' ')){
          return
        }


      }

  return (
      <div className='w-full  my-4'>
        <form 
            action="" 
            className=''>
                <div 
                    className='flex flex-col'>
                        <div className='flex flex-row'>
                                <img 
                                src="./public/twitter.svg" 
                                className='bg-white rounded-full h-20 p-1 m-1' />
                                    <textarea 
                                        name="" 
                                        id="tweet" 
                                        cols="80" 
                                        rows="5" 
                                        className='text-white bg-gray-800 resize-none' 
                                        placeholder='¿Que está pasando?'
                                    ></textarea>
                          </div>
                          <div className='flex flex-row items-center justify-end'>
                                  <p
                                        className={`mr-20 mt-4 rounded-xl text-white font-bold ${
                                                  counter <= 10 ? 'bg-red-500' : ''
                                                  }`}
                                        >{counter}</p>
                                  <input 
                                      type="submit" 
                                      value="Twittear" 
                                      className={`font-bold xl:mr-8  ${counter == 280 ? 'bg-gray-300' : 'bg-indigo-400'} xl:px-10 xl:py-4 mt-5 rounded-full cursor-pointer hover:bg-indigo-500`}
                                      onClick={handleSubmit}
                                  />
                          </div>
                  </div>
        </form>
    </div>
  )
}

export default Tweetform