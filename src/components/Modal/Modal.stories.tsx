import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Utils/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    onClose: () => alert('onClose'),
    children: <>Modal content</>,
  },
};

export const WithoutBackdrop: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    hideBackdrop: true,
    children: <>Modal content</>,
  },
};

export const WithCancelButton: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    cancelLabel: 'Cancel',
    onCancel: () => alert('onCancel'),
    children: <>Modal content</>,
  },
};

export const WithSubmitButton: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    submitLabel: 'Accept',
    onSubmit: () => alert('onSubmit'),
    children: <>Modal content</>,
  },
};

export const WithButtons: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    cancelLabel: 'Cancel',
    submitLabel: 'Accept',
    onCancel: () => alert('onCancel'),
    onSubmit: () => alert('onSubmit'),
    children: <>Modal content</>,
  },
};

export const WithFlippedButtons: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    flipButtons: true,
    cancelLabel: 'Cancel',
    submitLabel: 'Accept',
    onCancel: () => alert('onCancel'),
    onSubmit: () => alert('onSubmit'),
    children: <>Modal content</>,
  },
};

export const FormModal: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    cancelLabel: 'Cancel',
    submitLabel: 'Submit form',
    onCancel: () => alert('onCancel'),
    onFormSubmit: (e) => {
      alert('onFormSubmit');
      e.preventDefault();
    },
    children: <>Modal content</>,
  },
};

export const Wide: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    wide: true,
    children: <>Modal content</>,
  },
};
