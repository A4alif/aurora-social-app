import React from 'react'
import './infocard.css';
import { UilPen } from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <>
        <div className="infoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <UilPen className="icon"/>
            </div>
            <div className="info">
                <span>Status: </span>
                <span> In Relationship</span>
            </div>
            <div className="info">
                <span>Lives in: </span>
                <span> Dhaka</span>
            </div>
            <div className="info">
                <span>Works at: </span>
                <span> Medical College</span>
            </div>

            <button className='button log-btn'>Logout</button>
        </div>
    </>
  )
}

export default InfoCard