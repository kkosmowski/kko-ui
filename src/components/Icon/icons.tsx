import React from 'react';
import { IconItem } from '@storybook/blocks';

import { icons } from '~/theme/icons';
import { Icon } from '~/components/Icon/Icon';

export const MappedIcons = () =>
  icons.map((key) => (
    <IconItem name={key} key={key}>
      <Icon name={key} />
    </IconItem>
  ));
