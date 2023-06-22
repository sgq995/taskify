import type { PropFunction, QwikChangeEvent, Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export type InputProps = {
  label: string;
  ref?: Signal<Element | undefined> | ((el: Element) => void);
  onChange$?: PropFunction<
    (event: QwikChangeEvent<HTMLInputElement>, element: HTMLInputElement) => any
  >;
  value?: number | readonly string[] | FormDataEntryValue | null;
};

export const Input = component$<InputProps>(({ label, ...inputProps }) => {
  return (
    <label class="text-xs font-bold">
      {label}
      <input
        {...inputProps}
        class="w-full border-b border-solid border-b-gray-400 bg-transparent text-xl font-normal outline-none focus:border-sky-400"
      />
    </label>
  );
});
