import React from 'react'
import './followerscard.css';
import { Followers } from '../../Data/FollowersData';

const FollowersCard = () => {
  return (
    <>
        <div className="followersCard">
            <h3>Who is following you</h3>
            {Followers.map( (follower, id) => {
                return(
                    <div className='follower'> 
                        <div>
                            <img src={follower.img} alt="" className='followerimg' />
                            <div className='name'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button btn-follow'>Follow</button>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default FollowersCard