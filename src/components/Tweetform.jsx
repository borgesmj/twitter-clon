import React, { useState } from 'react'

const Tweetform = ({tweets, setTweets}) => {
  const [text, setText] = useState('')
  const [counter, setCounter] = useState(280)
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') {
      return
    }

    if (counter < 0){
      return
    }

    const date = () =>{
      const now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth()
      let day = now.getDate()
      let hour = now.getHours()
      let minutes = now.getMinutes()
      return(
        {year, month, day, hour, minutes}
      )
    }

    const generarID = () => {
      const numero = Math.random().toString(36).substring(2)
      const fecha = Date.now().toString(36).substring(2)

      return numero + fecha
  }

    const objetoTweets = {}

    objetoTweets.text = text
    objetoTweets.fecha = date()
    objetoTweets.id = generarID() 
    

    setTweets([...tweets, objetoTweets])

    setCounter(280)
    setText('')
  }

  const handleInput = (e) => {
    const inputLength = e.target.value.length
    setText(e.target.value)
    setCounter(280 - inputLength)
  }

  return (
    <div className='w-full my-4'>
      <form 
          action='' 
          className='bg-gray-900 rounded-xl mx-5'
          onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <img src='./public/twitter.svg' className='bg-white rounded-full h-20 p-1 m-1' />
            <textarea
              name=''
              id='tweet'
              cols='80'
              rows='5'
              className='text-white bg-gray-900 resize-none'
              placeholder='¿Qué está pasando?'
              value={text}
              onInput={handleInput}
            ></textarea>
          </div>
          <div className='flex flex-row items-center justify-end'>
            <p
              className={`mr-20 mt-4 rounded-xl text-white font-bold ${
                counter <= 10 ? 'bg-red-500' : ''
              }`}
            >
              {counter}
            </p>
            <input
              type='submit'
              value='Twittear'
              className={`font-bold xl:mr-8 text-white
                                          ${counter == 280 ? 'bg-indigo-100' : 'bg-indigo-500'}
                                          ${counter == 280 ? 'cursor-default' : 'cursor-pointer'} 
                                          ${counter == 280 ? 'hover:bg-indigo-100' : 'hover:bg-indigo-600'}
                                          xl:px-10 xl:py-4 mt-5 rounded-full cursor-pointer bg-indigo-500`}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Tweetform
