import type { FormEventHandler, HTMLAttributes, ReactNode } from 'react';

import type { ButtonProps } from '~/components/Button';

export type ModalProps = Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> & {
  isOpen: boolean;
  title: ReactNode;
  cancelLabel?: string;
  submitLabel?: string;
  cancelButtonProps?: ButtonProps;
  submitButtonProps?: ButtonProps;
  flipButtons?: boolean;
  children: ReactNode;
  wrapperClassName?: string;
  hideBackdrop?: boolean;
  onClose?: VoidFunction;
  onFormSubmit?: FormEventHandler;
  onCancel?: VoidFunction;
  onSubmit?: VoidFunction;
};
