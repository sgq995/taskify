import { Slot, component$ } from '@builder.io/qwik';

export const CardTop = component$(() => {
  return (
    <div class="relative flex w-full">
      <div class="absolute hidden w-full group-hover:flex">
        <Slot />
      </div>
    </div>
  );
});
