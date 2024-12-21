import React, { FC } from 'react';
import { ProfileForm } from 'src/widgets/ProfileForm';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectProfile } from 'src/store/slices/authSlice';
import { t } from 'i18next';

export const ProfilePage: FC = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <>
      {profile && (
        <div style={{ padding: '20px' }}>
          <button onClick={logoutHandle}>{t`buttons.logout`}</button>
        </div>
      )}
      <ProfileForm />
    </>
  );
};
