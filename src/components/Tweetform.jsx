import React from 'react'

const Tweetform = () => {
  return (
      <div className='w-full'>
        <form action="" className=''>
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                    <img src="./public/twitter.svg" alt="" className='bg-white rounded-full h-20 p-1 m-1' />
                    <textarea name="" id="tweet" cols="80" rows="5" className='text-white bg-gray-800 resize-none' placeholder='¿Que está pasando?'></textarea>
            </div>
            <div className='flex flex-row-reverse items-center justify-start'>
                    <input type="submit" value="Twittear" className='xl:mr-8 bg-indigo-400 xl:px-10 xl:py-4 mt-5 rounded-full cursor-pointer hover:bg-indigo-500' />
                    <p className='mr-20 mt-4 text-white font-bold'>280</p>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Tweetform