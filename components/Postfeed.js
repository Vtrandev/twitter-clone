import React, { useEffect, useState } from "react";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

function Postfeed() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs)
    })

    return unsubscribe
  }, [])

  return (
    <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow border-gray-700 border-x">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50 bg-black">
        Home
      </div>
      <TweetInput />
      {tweets.map(tweet => (
        <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />
      ))}
    </div>
  );
}

export default Postfeed;
