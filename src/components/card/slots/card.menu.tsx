import { component$, Slot } from '@builder.io/qwik';

export const CardMenu = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
