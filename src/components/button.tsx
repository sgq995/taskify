import type { ClassList, PropFunction, QwikMouseEvent } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export type ButtonProps = {
  onClick$?: PropFunction<
    (
      event: QwikMouseEvent<HTMLButtonElement, MouseEvent>,
      element: HTMLButtonElement
    ) => any
  >;
  class?: ClassList;
};

export const Button = component$<ButtonProps>(({ onClick$, ...props }) => {
  return (
    <button
      onClick$={onClick$}
      class={[
        props.class,
        'cursor-default bg-sky-600 p-2 text-white hover:bg-sky-500 active:bg-sky-700',
      ]}
    >
      <Slot />
    </button>
  );
});
