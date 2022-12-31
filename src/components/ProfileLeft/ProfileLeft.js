import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import './profileleft.css'

const ProfileLeft = () => {
  return (
    <>
        <div className="profileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    </>
  )
}

export default ProfileLeft