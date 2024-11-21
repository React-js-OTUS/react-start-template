import React from 'react';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import './ProfileScreen.css';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const handleEditProfileSubmit = (data: { username: string; about: string }) => {
    console.log('Edit Profile Data:', data);
  };

  const handleChangePasswordSubmit = (data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log('Change Password Data:', data);
  };

  return (
    <div className="profile-page">
      <h1>{t('profile')}</h1>
      <div className="profile-section">
        <EditProfile onSubmit={handleEditProfileSubmit} />
      </div>
      <div className="profile-section">
        <ChangePassword onSubmit={handleChangePasswordSubmit} />
      </div>
    </div>
  );
};

export default Profile;
