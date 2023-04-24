import React from 'react'
import { FaReply} from "react-icons/fa";
import { FaRetweet} from "react-icons/fa";
import { FaHeart} from "react-icons/fa";
import { FaShareAlt} from "react-icons/fa";

const Tweet = ({tweet}) => {

    const meses = [
        "Jan",
        "Frb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ]

    console.log(meses[tweet.fecha.month])


  return (
    <div className='border-t-2 flex flex-col py-3 mr-2 rounded-sm'>
        <div className=' flex flex-row items-center'>
            <div>
                <img src="./public/twitter.svg" className='bg-white rounded-full h-20' alt="" />
            </div>
            <div className='my-2 flex flex-col items-center justify-center'>
                <a href="#" className=' ml-4 font-bold text-indigo-500 text-2xl'><p>Usuario</p></a>
                <p className='font-bold text-white'><a href="">@Twitter</a></p>
            </div>
        </div>
        <div className='text-xl text-white my-2'>
            <p>{tweet.text}</p>
        </div>
        <div className='text-xs text-white my-2'>
            <a href="https://www.twitter.com"><p>{tweet.fecha.hour}:{tweet.fecha.minutes} • {meses[tweet.fecha.month]} {tweet.fecha.day}, {tweet.fecha.year}</p></a> 
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