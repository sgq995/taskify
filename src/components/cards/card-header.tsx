import { Slot, component$ } from '@builder.io/qwik';

export const CardHeader = component$(() => {
  return (
    <header class="py-2">
      <Slot />
    </header>
  );
});
