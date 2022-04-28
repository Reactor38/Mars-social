import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>

      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt='Avatar' />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div >
  )
}

export default ProfileInfo;