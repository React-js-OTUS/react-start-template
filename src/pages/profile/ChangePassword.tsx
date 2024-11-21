import React from 'react';
import { useForm } from 'react-hook-form';

interface ChangePasswordProps {
  onSubmit: (data: { currentPassword: string; newPassword: string; confirmPassword: string }) => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const newPassword = watch('newPassword');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="password-form">
      <h2>Изменить пароль</h2>
      <div>
        <label>Пароль *</label>
        <input
          type="password"
          {...register('currentPassword', { required: 'Введите текущий пароль' })}
          placeholder="Укажите пароль"
        />
        {typeof errors.currentPassword?.message === 'string' && <p>{errors.currentPassword.message}</p>}
      </div>
      <div>
        <label>Новый пароль *</label>
        <input
          type="password"
          {...register('newPassword', { required: 'Введите новый пароль' })}
          placeholder="Укажите новый пароль"
        />
        {typeof errors.newPassword?.message === 'string' && <p>{errors.newPassword.message}</p>}
      </div>
      <div>
        <label>Повторите пароль *</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Повторите пароль',
            validate: (value) => value === newPassword || 'Пароли не совпадают',
          })}
          placeholder="Повторите пароль"
        />
        {typeof errors.confirmPassword?.message === 'string' && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit">Изменить</button>
    </form>
  );
};

export default ChangePassword;
