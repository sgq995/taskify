import { Slot, component$ } from '@builder.io/qwik';

export const Card = component$(() => {
  return (
    <article class="group h-fit w-80 rounded border border-solid border-gray-300 bg-gray-50 p-4 shadow-md">
      <Slot />
    </article>
  );
});
