import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

import { colors, scopedSizes } from '~/theme/consts';
import { icons } from '~/theme/icons';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: icons,
    },
    color: {
      control: { type: 'select' },
      options: colors,
    },
    size: {
      control: { type: 'select' },
      options: scopedSizes,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    name: 'beenhere',
    color: 'primary',
    size: 'md',
  },
};
