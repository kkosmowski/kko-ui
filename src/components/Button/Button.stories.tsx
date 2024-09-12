import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// todo: set up selects for color, variant, size and disabled

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
