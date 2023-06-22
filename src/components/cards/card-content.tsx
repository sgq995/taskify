import { Slot, component$ } from '@builder.io/qwik';

export const CardContent = component$(() => {
  return (
    <p class="py-1 text-base">
      <Slot />
    </p>
  );
});
