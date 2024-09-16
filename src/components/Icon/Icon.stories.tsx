import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

import { colors, iconVariants, scopedSizes } from '~/theme/consts';
import { icons } from '~/theme/icons';

const meta: Meta<typeof Icon> = {
  title: 'Data display/Icon',
  component: Icon,
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
      description: '`Color` or custom color',
    },
    variant: {
      control: { type: 'select' },
      options: iconVariants,
    },
    size: {
      control: { type: 'select' },
      options: scopedSizes,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'delete',
    color: 'primary',
    variant: 'outlined',
    size: 'md',
  },
};
