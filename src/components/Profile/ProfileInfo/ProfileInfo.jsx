import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import Avatar from '../../../assets/images/Avatar.png';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src='https://img.freepik.com/free-vector/starry-universe-space-galaxy-nebula-stars-and-stardust-vector-cosmic-background-with-blue-and-purple-realistic-nebulosity-and-shining-stars-colorful-cosmos-infinite-night-sky-wallpaper-backdrop_8071-4831.jpg' alt='Background' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || Avatar} alt='Avatar' />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        {/* <div><b>vk:</b> {props.profile.contacts.vk}</div>
        <div><b>twitter:</b> {props.profile.contacts.twitter}</div>
        <div><b>instagram:</b> {props.profile.contacts.instagram}</div> */}
      </div>
    </div >
  )
}

export default ProfileInfo;