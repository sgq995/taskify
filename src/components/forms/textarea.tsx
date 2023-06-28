import type { PropFunction, QwikChangeEvent, Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export type TextareaProps = {
  label: string;
  ref?: Signal<Element | undefined> | ((el: Element) => void);
  onChange$?: PropFunction<
    (
      event: QwikChangeEvent<HTMLTextAreaElement>,
      element: HTMLTextAreaElement
    ) => any
  >;
  value?: string | number | readonly string[];
};

export const Textarea = component$<TextareaProps>(
  ({ label, ...textareaProps }) => {
    return (
      <label class="text-xs font-bold">
        {label}
        <textarea
          {...textareaProps}
          class="w-full rounded border border-solid border-gray-400 bg-transparent p-1 text-base font-normal outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-200"
        />
      </label>
    );
  }
);
