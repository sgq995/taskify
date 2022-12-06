import { component$, Slot } from '@builder.io/qwik';
import clsx from 'clsx';

export interface IPaperProps {
  className?: string;
}

export const Paper = component$(({ className }: IPaperProps) => {
  return (
    <div
      className={clsx(
        'bg-gray-50',
        'border border-solid border-gray-200',
        'rounded-xl',
        className
      )}
    >
      <Slot />
    </div>
  );
});
