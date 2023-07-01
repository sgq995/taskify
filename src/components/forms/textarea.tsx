import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export type TextareaProps = QwikIntrinsicElements['textarea'] & {
  label: string;
  error?: boolean;
};

export const Textarea = component$<TextareaProps>(
  ({ label, error, ...textareaProps }) => {
    return (
      <label class="text-xs font-bold">
        {label}
        <textarea
          {...textareaProps}
          children={undefined}
          class={[
            'w-full rounded border border-solid border-gray-400 bg-transparent p-1 text-base font-normal outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-200',
            {
              'border-red-500': error,
            },
          ]}
        />
      </label>
    );
  }
);
