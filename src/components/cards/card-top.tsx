import { Slot, component$ } from '@builder.io/qwik';

export const CardTop = component$(() => {
  return (
    <div class="relative">
      <div class="absolute right-0 hidden group-hover:flex">
        <Slot />
      </div>
    </div>
  );
});
