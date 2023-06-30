import type { PropFunction, QwikChangeEvent, Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export type InputProps = {
  label: string;
  error?: boolean;
  ref?: Signal<Element | undefined> | ((el: Element) => void);
  onChange$?: PropFunction<
    (event: QwikChangeEvent<HTMLInputElement>, element: HTMLInputElement) => any
  >;
  value?: number | readonly string[] | FormDataEntryValue | null;
};

export const Input = component$<InputProps>(
  ({ label, error, ...inputProps }) => {
    return (
      <label class="text-xs font-bold">
        {label}
        <input
          {...inputProps}
          class={[
            'w-full rounded border border-solid border-gray-400 bg-transparent p-1 text-xl font-normal outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-200',
            {
              'border-red-500': !!error,
            },
          ]}
        />
      </label>
    );
  }
);
