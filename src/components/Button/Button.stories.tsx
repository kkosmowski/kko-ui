import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

import { buttonVariants, colors, scopedSizes } from '~/storybook';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
    variant: {
      control: { type: 'select' },
      options: buttonVariants,
    },
    size: {
      control: { type: 'select' },
      options: scopedSizes,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Ghost: Story = {
  name: 'Default (Ghost)',
  args: {
    color: 'primary',
    variant: 'ghost',
    size: 'md',
    children: 'Button',
  },
};

export const Contained: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'md',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    color: 'primary',
    variant: 'outlined',
    size: 'md',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    color: 'primary',
    variant: 'text',
    size: 'md',
    children: 'Button',
  },
};
