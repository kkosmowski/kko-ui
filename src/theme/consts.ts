import type { Color } from '~/types/color';
import type { ScopedSize, Size } from '~/types/size';
import type { Variant } from '~/types/variant';
import type { ButtonVariant } from '~/components/Button';
import type { IconVariant } from '~/components/Icon';

export const colors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];

export const scopedSizes: ScopedSize[] = ['sm', 'md', 'lg'];
export const sizes: Size[] = ['xs', ...scopedSizes, 'xl'];

export const variants: Variant[] = ['ghost', 'contained', 'outlined'];

export const buttonVariants: ButtonVariant[] = [...variants, 'text', 'icon'];
export const iconVariants: IconVariant[] = ['filled', 'outlined'];
