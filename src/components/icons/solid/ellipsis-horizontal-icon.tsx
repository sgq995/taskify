import clsx from 'clsx';
import { IIconProps } from '../icon.types';
import { getSizeFromProps } from '../icon.utility';

export const EllipsisHorizontalIcon = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={clsx(props.className, getSizeFromProps(props))}
  >
    <path
      fillRule="evenodd"
      d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
      clipRule="evenodd"
    />
  </svg>
);
