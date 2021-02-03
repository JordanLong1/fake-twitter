import React, { useEffect, useState } from "react";
import {Repeat} from 'react-feather';
import {MessageCircle} from 'react-feather';
import {Heart} from 'react-feather'; 
import {Share} from 'react-feather';
import Confetti from 'react-confetti'; 




export default function App() {
  
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=50")
      .then((resp) => resp.json())
      .then((res) => setUsers(res.results));
  }, [setUsers]);


  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setTweets(res))

  }, [setTweets])



  const mapUsers = () => {
    return filterUsers().map((user) => {
      
      let userTweets = tweets.map(tweet => {
       return tweet.title
      })

      const handleIconClick = () => {
        return (
          <Confetti
          numberOfPieces={500}
          recycle={false}
          />
        )
      }

      return (
        <div key={user.login.username} className="users-container">
          <img
            className="imgs"
            src={user.picture.large}
            alt={user.login.username}
          />
          <p className='name'>{user.name.first} {user.name.last}</p>
          <p className='at'>@{user.login.username}</p>
         
          <p className='tweets'>{userTweets}</p>

        <MessageCircle className='twit-cons' onClick={handleIconClick} />
        <Repeat className='twit-cons' onClick={handleIconClick} />
        <Heart className='twit-cons' onClick={handleIconClick} />
        <Share className='twit-cons' onClick={handleIconClick}  />

          
        </div>
      );
    });
  };

  const filterUsers = () => {
    return users.filter((user) => {
      return user.login.username.includes(input);
    });
  };

  return (
    <div className="App">

<div className='input-container'>
      <input
      className='input-box'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search...'
      />
      </div>
  
      <div className="grid">
        {mapUsers()}
        </div>

      
    
    </div>
  );
}
