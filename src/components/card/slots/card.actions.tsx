import { component$, Slot } from '@builder.io/qwik';

export const CardActions = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
