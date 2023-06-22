import { Slot, component$ } from '@builder.io/qwik';

export const CardFooter = component$(() => {
  return (
    <footer>
      <Slot />
    </footer>
  );
});
