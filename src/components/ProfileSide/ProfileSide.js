import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './profileside.css';

const profileSide = () => {
  return (
    <>
        <div className="profileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    </>
  )
}

export default profileSide