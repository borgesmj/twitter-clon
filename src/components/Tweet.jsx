import React from 'react'
import { FaReply} from "react-icons/fa";
import { FaRetweet} from "react-icons/fa";
import { FaHeart} from "react-icons/fa";
import { FaShareAlt} from "react-icons/fa";

const Tweet = () => {
  return (
    <div className='border-t-2 flex flex-col py-3 mr-2 rounded-sm'>
        <div className=' flex flex-row items-center'>
            <div>
                <img src="./public/twitter.svg" className='bg-white rounded-full h-20' alt="" />
            </div>
            <div className='my-2 flex flex-col items-center justify-center'>
                <a href="#" className=' ml-4 font-bold text-indigo-500 text-2xl'><p>MIguel José</p></a>
                <p className='font-bold text-white'><a href="">@Migu3l_oN</a></p>
            </div>
        </div>
        <div className='text-xl text-white my-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, aspernatur? #hashtag</p>
        </div>
        <div className='text-xs text-white my-2'>
            <a href="#"><p>11:32, 23/04/2023</p></a> 
        </div>
        <div className=' mt-10 flex flex-row w-4/5 text-white align-center justify-between'>
            <a href="" className='text-indigo-600 hover:bg-slate-50 hover:opacity-50 p-2 text-xl rounded-xl'><FaReply/></a>
            <a href="" className='text-indigo-600 hover:bg-slate-50 hover:opacity-50 p-2 text-xl rounded-xl'><FaRetweet/></a>
            <a href="" className='text-indigo-600 hover:bg-slate-50 hover:opacity-50 p-2 text-xl rounded-xl'><FaHeart/></a>
            <a href="" className='text-indigo-600 hover:bg-slate-50 hover:opacity-50 p-2 text-xl rounded-xl'><FaShareAlt/></a>
        </div>
    </div>
  )
}

export default Tweet