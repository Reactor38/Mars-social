import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://img.freepik.com/free-vector/starry-universe-space-galaxy-nebula-stars-and-stardust-vector-cosmic-background-with-blue-and-purple-realistic-nebulosity-and-shining-stars-colorful-cosmos-infinite-night-sky-wallpaper-backdrop_8071-4831.jpg' alt='Background' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div >
  )
}

export default ProfileInfo;