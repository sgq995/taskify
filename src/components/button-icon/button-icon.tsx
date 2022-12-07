import { component$, HTMLAttributes, Slot } from '@builder.io/qwik';
import clsx from 'clsx';

export interface IButtonIconProps extends HTMLAttributes<HTMLButtonElement> {}

export const ButtonIcon = component$(
  ({ className, ...props }: IButtonIconProps) => {
    return (
      <button
        className={clsx(className, 'p-0 bg-transparent border-none')}
        {...props}
      >
        <Slot />
      </button>
    );
  }
);
