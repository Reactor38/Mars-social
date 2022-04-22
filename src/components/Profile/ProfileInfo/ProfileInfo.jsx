import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({ profile, status, updateStatus }) => {

  if (!profile) {
    return <Preloader />
  }

  return (
    <div>

      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt='Avatar' />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div >
  )
}

export default ProfileInfo;