import React from 'react';

import styles from './Modal.module.css';
import type { ModalProps } from './Modal.types';

import { IconButton } from '~/components/IconButton';
import { Button } from '~/components/Button';
import { buildClassName } from '~/utils/build-class-name';

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    title,
    submitLabel,
    cancelLabel,
    submitButtonProps,
    cancelButtonProps,
    flipButtons = false,
    wide = false,
    className = '',
    wrapperClassName = '',
    hideBackdrop = false,
    children,
    onClose,
    onFormSubmit,
    onCancel,
    onSubmit,
  } = props;

  if (!isOpen) {
    return null;
  }

  const ModalElement = onFormSubmit ? 'form' : 'aside';
  const wideClassName = wide ? 'wide' : '';

  return (
    <div className={buildClassName(styles.wrapper, wrapperClassName)}>
      <ModalElement className={buildClassName(styles.modal, className, wideClassName)} onSubmit={onFormSubmit}>
        <header className={styles.modalHeader}>
          <h3>{title}</h3>

          <IconButton name="close" />
        </header>

        <section className={styles.modalContent}>{children}</section>

        <footer className={buildClassName(styles.modalFooter, flipButtons ? styles.modalFooterFlipped : '')}>
          {(submitLabel || submitButtonProps?.children) && (
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => onSubmit?.()}
              {...submitButtonProps}
            >
              {submitLabel}
            </Button>
          )}
          {(cancelLabel || cancelButtonProps?.children) && (
            <Button type="button" color="secondary" onClick={() => onCancel?.()} {...cancelButtonProps}>
              {cancelLabel}
            </Button>
          )}
        </footer>
      </ModalElement>

      {!hideBackdrop && <div className={styles.backdrop} onClick={() => onClose?.()} />}
    </div>
  );
};
