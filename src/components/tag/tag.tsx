import { component$, Slot } from '@builder.io/qwik';
import clsx from 'clsx';

export const Tag = component$(() => {
  return (
    <span
      className={clsx(
        'px-4 py-1',
        'bg-purple-200 text-purple-700',
        'rounded-full',
        'text-xs font-medium'
      )}
    >
      <Slot />
    </span>
  );
});
