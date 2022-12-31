import React from 'react'
import Posts from '../../components/Posts/Posts';
import PostShare from '../../components/PostShare/PostShare';
import PostSide from '../../components/PostSide/PostSide';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import RightSide from '../../components/RightSide/RightSide';
import './profile.css';

const Profile = () => {
  return (
    <>
      <div className="profile">
        <ProfileLeft />
        <div className="profileCenter">
          <ProfileCard />
          {/* add postslide  */}
          <PostShare />
          <Posts />
        </div>
        <RightSide />
      </div>
    </>
  )
}

export default Profile