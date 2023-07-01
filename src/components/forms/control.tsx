import type { PropFunction, QwikMouseEvent } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export type ControlProps = {
  onClick$?: PropFunction<
    (
      event: QwikMouseEvent<HTMLButtonElement, MouseEvent>,
      element: HTMLButtonElement
    ) => any
  >;
};

export const Control = component$<ControlProps>(({ onClick$ }) => {
  return (
    <button
      class="cursor-default border border-transparent text-left hover:border-dashed hover:border-gray-400"
      onClick$={onClick$}
    >
      <Slot />
    </button>
  );
});
