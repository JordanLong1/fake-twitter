import React, { useEffect, useState } from "react";
import Home from './Home'
import {Repeat} from 'react-feather';
import {MessageCircle} from 'react-feather';
import {Heart} from 'react-feather'; 
import {Share} from 'react-feather';
import SideNav from './SideNav'

export default function App() {
  
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api?results=50")
      .then((resp) => resp.json())
      .then((res) => setUsers(res.results));
  }, []);


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

      return (
        <div key={user.login.username} className="users-container">
          <img
            className="imgs"
            src={user.picture.large}
            alt={user.login.username}
          />
          <p className='name'>{user.name.first} {user.name.last}</p>
          <p className='at'>@{user.login.username}</p>
          <MessageCircle />
        <Repeat />
        <Heart />
        <Share />
          <p className='tweets'>{userTweets}</p>
          <p>

          </p>
        </div>
      );
    });
  };

  const filterUsers = () => {
    return users.filter((user) => {
      return user.login.username.includes(input);
    });
  };

const getOneImg = () => {
  return users.map(user => {
    // console.log(user.picture.large)
  })
}

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
      <SideNav />
      <div className="grid">
        {mapUsers()}
        {getOneImg()}
        </div>
      <div></div>
    </div>
  );
}
