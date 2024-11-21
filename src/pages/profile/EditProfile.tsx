import React from 'react';
import { useForm } from 'react-hook-form';

interface EditProfileProps {
  onSubmit: (data: { username: string; about: string }) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
      <h2>Изменить профиль</h2>
      <div>
        <label>Псевдоним *</label>
        <input
          {...register('username', { required: 'Псевдоним обязателен' })}
          placeholder="Придумайте себе псевдоним"
        />
        {typeof errors.username?.message === 'string' && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label>О себе</label>
        <textarea {...register('about')} placeholder="Напишите что-нибудь о себе" />
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default EditProfile;
