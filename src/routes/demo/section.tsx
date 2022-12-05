import { component$, Slot } from '@builder.io/qwik';
import { clsx } from 'clsx';

export const Section = component$(() => {
  return (
    <section
      class={clsx(
        'container',
        'mx-auto p-4',
        'flex flex-col items-center justify-center gap-8',
        'bg-slate-100',
        'border border-solid border-slate-300'
      )}
    >
      <Slot />
    </section>
  );
});
