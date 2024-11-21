import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Controls visibility of the modal',
    },
    children: {
      control: 'text',
      description: 'Content displayed inside the modal',
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  children: 'Это контент модального окна',
};
