import React from 'react'
import './Home.css';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import PostSide from '../../components/PostSide/PostSide';

const Home = () => {
  return (
    <>
        <div className="home">
            <ProfileSide />
            <PostSide />
            <div className="rightSide">Rightside</div>
        </div>
    </>
  )
}

export default Home