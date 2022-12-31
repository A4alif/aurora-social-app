import React, { useRef, useState } from "react";
import "./postshare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPinAlt } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from '@iconscout/react-unicons'

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <>
      <div className="postShare">
        <img src={ProfileImage} alt="profile_img" />
        <div>
          <input type="text" placeholder="What's in your mind" />
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery />
              Photo
            </div>
            <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <UilLocationPinAlt />
              Location
            </div>
            <div className="option" style={{ color: "var(--schedule)" }}>
              <UilSchedule />
              Schedule
            </div>
            <button className="button ps-button">Share</button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
                <UilTimes onClick={() => setImage(null)} />
                <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
