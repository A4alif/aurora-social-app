import React from 'react'
import './profilecard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

const ProfileCard = () => {
  return (
    <>
        <div className="profileCard">
            <div className="profileImage">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="profileName">
                <span>Zakia Sultana</span>
                <span>Medical Student</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>5,500</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />

            </div>

            <span>My Profile</span>
        </div>
    </>
  )
}

export default ProfileCard