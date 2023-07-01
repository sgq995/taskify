import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { TbPlus } from '@qwikest/icons/tablericons';
import { Button } from '~/components/button';
import { Task, TaskForm } from '~/components/tasks';
import { createTask, deleteTask, updateTask } from '~/store';
import { loadLocalStorage } from '~/store/local-storage';
import type { Store } from '~/store/local-storage';

export default component$(() => {
  const store = useSignal<Store>();
  const isFormShown = useSignal<boolean>(false);

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
            onUpdate$={async (task) => {
              await updateTask({ ...task, uuid });
              store.value = await loadLocalStorage();
            }}
            onDelete$={async () => {
              await deleteTask({ uuid });
              store.value = await loadLocalStorage();
            }}
          />
        ))}
      </section>

      <section class="container flex flex-col items-center gap-8">
        <div class="relative flex w-80 flex-col justify-center">
          <hr class="border-b-solid border-b border-b-gray-100 " />
          <Button
            class="absolute left-1/2 -translate-x-1/2 rounded-full"
            onClick$={() => {
              isFormShown.value = true;
            }}
          >
            <TbPlus class="stroke-2 text-xl" />
          </Button>
        </div>

        <div
          class={[
            'overflow-hidden transition-transform duration-300',
            {
              'scale-y-0': !isFormShown.value,
              'scale-y-100': isFormShown.value,
            },
          ]}
        >
          <TaskForm
            onSave$={async (task) => {
              await createTask(task);
              store.value = await loadLocalStorage();
            }}
          />
        </div>
      </section>
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
