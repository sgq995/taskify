import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { TbPlus } from '@qwikest/icons/tablericons';
import { Button } from '~/components/button';
import { Task, TaskForm } from '~/components/tasks';
import { createTask, deleteTask } from '~/store';
import { loadLocalStorage } from '~/store/local-storage';
import type { Store } from '~/store/local-storage';

export default component$(() => {
  const store = useSignal<Store>();

  useVisibleTask$(
    async () => {
      store.value = await loadLocalStorage();
    },
    { strategy: 'document-ready' }
  );

  return (
    <div class="w-100 flex min-h-screen flex-col items-center bg-gray-200">
      <section class="container flex flex-col items-center gap-4 py-8">
        {store.value?.default.map(({ uuid, title, description }) => (
          <Task
            key={uuid}
            title={title}
            description={description}
            onDelete$={async () => {
              await deleteTask({ uuid });
              store.value = await loadLocalStorage();
            }}
          />
        ))}

        <TaskForm
          onSave$={async (task) => {
            await createTask(task);
            store.value = await loadLocalStorage();
          }}
        />
      </section>

      <div class=" relative flex w-80 flex-col justify-center">
        <hr class="border-b-solid border-b border-b-gray-100 " />
        <Button class="absolute left-1/2 -translate-x-1/2 rounded-full">
          <TbPlus class="stroke-2 text-xl" />
        </Button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Taskify',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
