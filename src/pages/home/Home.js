import React from 'react'
import './Home.css';
import ProfileSide from '../../components/ProfileSide/ProfileSide';

const Home = () => {
  return (
    <>
        <div className="home">
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="rightSide">Rightside</div>
        </div>
    </>
  )
}

export default Home