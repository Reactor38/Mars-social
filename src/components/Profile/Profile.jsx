import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://img.freepik.com/free-vector/starry-universe-space-galaxy-nebula-stars-and-stardust-vector-cosmic-background-with-blue-and-purple-realistic-nebulosity-and-shining-stars-colorful-cosmos-infinite-night-sky-wallpaper-backdrop_8071-4831.jpg' alt='Background' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div >
}

export default Profile;