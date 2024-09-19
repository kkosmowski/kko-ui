import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Row } from './Row';

import { alignItemsValues, justifyContentValues } from '~/consts/flex';

const defaultStyle = {
  backgroundColor: '#eee',
  padding: 16,
  width: 200,
  height: 100,
};

const meta: Meta<typeof Row> = {
  title: 'Layout/Row',
  component: Row,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    justifyContent: {
      control: { type: 'select' },
      options: justifyContentValues,
    },
    alignItems: {
      control: { type: 'select' },
      options: alignItemsValues,
    },
  },
  args: {
    style: defaultStyle,
    children: (
      <>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </>
    ),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Default: Story = {};

export const JustifyContentSpaceBetween: Story = {
  name: 'justify-content: space-between',
  args: {
    justifyContent: 'space-between',
  },
};

export const AlignItemsCenter: Story = {
  name: 'align-items: center',
  args: {
    alignItems: 'center',
  },
};

export const Reversed: Story = {
  args: {
    reverse: true,
  },
};

export const Spacing: Story = {
  name: 'Spacing (gap)',
  args: {
    gap: 16,
  },
};

export const CustomStyles: Story = {
  args: {
    style: {
      ...defaultStyle,
      color: '#44c',
      boxShadow: '0 0 16px #0004',
      backgroundColor: '#cdcddf',
    },
  },
};
