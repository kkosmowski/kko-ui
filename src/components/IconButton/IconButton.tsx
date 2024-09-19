import React from 'react';

import type { IconButtonProps } from './IconButton.types';

import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';

export const IconButton = ({ name, ...buttonProps }: IconButtonProps) => {
  return (
    <Button variant="icon" {...buttonProps}>
      <Icon name={name} />
    </Button>
  );
};
