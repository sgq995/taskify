import { IIconProps } from './icon.types';

export function getSizeFromProps({ sm }: IIconProps) {
  if (sm) {
    return 'w-4 h-4';
  }

  return 'w-6 h-6';
}
