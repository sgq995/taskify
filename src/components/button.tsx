import {
  type ClassList,
  component$,
  type QwikIntrinsicElements,
  Slot,
} from '@builder.io/qwik';
import { isClassSignal } from '~/utilities';

export type ButtonProps = QwikIntrinsicElements['button'];

export const Button = component$<ButtonProps>((props) => {
  const classes: ClassList = [];
  if (props.class && !isClassSignal(props.class)) {
    classes.push(Array.isArray(props.class) ? props.class : [props.class]);
  }

  return (
    <button
      {...props}
      class={
        isClassSignal(props.class)
          ? props.class
          : [
              ...classes,
              'cursor-default bg-sky-600 p-2 text-white hover:bg-sky-500 active:bg-sky-700',
            ]
      }
    >
      <Slot />
    </button>
  );
});
