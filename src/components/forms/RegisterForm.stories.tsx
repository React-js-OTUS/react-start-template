import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterForm from './RegisterForm'; // убедитесь, что путь к файлу RegisterForm указан корректно

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: 'Alisa',
  email: 'alisa@mail.ru',
  password: '',
};
