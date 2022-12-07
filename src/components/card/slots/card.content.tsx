import { component$, Slot } from '@builder.io/qwik';

export const CardContent = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
