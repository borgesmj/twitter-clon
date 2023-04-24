import React from 'react'
import Tweet from './Tweet'

const Tweetlist = ({tweets}) => {
  return (
    <div>
      {tweets.map((tweet) =>
      (
        <Tweet
        key = {tweet.id}
        tweet = {tweet}
        />

      ))}
    </div>
  )
}

export default Tweetlist