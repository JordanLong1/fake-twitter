import React, {useState} from 'react'
import img from './imgs/avt.jpeg'
function Home(props) {

    const [tweet, setTweet] = useState('')


    const getImg = (props) => {
        props.imgs.map(user => {
            return console.log(user.first)
        })
    }

    return (
        <div className='tweet-container'>
            <div className='home-section'>
                <h6>Home</h6>
            </div>
            <div className='content-section'>
            <img className='avt-img' src={img} alt='' />
            <textarea id="text" type='text' value={tweet} onChange={(e) => setTweet(e.target.value) } placeholder='Whats happening?' />
            <button className='tweet-btn'>Tweet</button>

            </div>
        </div>
    )
}

export default Home