import { component$, Slot } from '@builder.io/qwik';

export const CardHeader = component$(() => {
  return (
    <div className="flex flex-wrap">
      <Slot />
    </div>
  );
});
