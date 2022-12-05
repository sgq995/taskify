import { component$ } from '@builder.io/qwik';
import { FlagIcon } from '~/components/icons/solid/flag-icon';
import { Section } from './section';

export default component$(() => {
  return (
    <main class="bg-slate-200 min-w-full min-h-screen flex flex-col gap-8">
      <Section>
        <span class="px-4 py-1 bg-purple-200 text-purple-700 rounded-full">
          Copywriting
        </span>
        <span class="px-4 py-1 bg-sky-200 text-sky-700 rounded-full">
          UI Design
        </span>
        <span class="px-4 py-1 bg-emerald-200 text-emerald-700 rounded-full">
          Illustration
        </span>
      </Section>

      <Section>
        <div class="rounded border border-solid border-gray-200 bg-gray-50 p-2 flex flex-col shadow hover:shadow-lg">
          <span>Tag</span>
          <span>Description</span>
          <div>
            <FlagIcon />
          </div>
        </div>
      </Section>

      <Section></Section>
    </main>
  );
});
