import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const password = watch('password');

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log('data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя:</label>
        <input {...register('username', { required: 'Имя обязательно' })} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email обязателен',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Некорректный email',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Пароль:</label>
        <input
          type="password"
          {...register('password', {
            required: 'Пароль обязателен',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать 6 знаков',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Повторите пароль:</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Повторите пароль',
            validate: (value) => value === password || 'Пароли не совпадают',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
