import { Slot, component$ } from '@builder.io/qwik';

export const CardTitle = component$(() => {
  return (
    <span class="text-xl font-normal">
      <Slot />
    </span>
  );
});
