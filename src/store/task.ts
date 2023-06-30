import { z } from 'zod';
import { loadLocalStorage, saveLocalStorage } from './local-storage';

export const Task = z.object({
  /**
   * The unique identifier for this task
   */
  uuid: z.string().uuid(),
  /**
   * The title for the given task
   */
  title: z.string(),
  /**
   * The description for the given task
   */
  description: z.string(),
});

export type Task = z.infer<typeof Task>;

export const CreatableTask = Task.omit({ uuid: true });

export type CreatableTask = z.infer<typeof CreatableTask>;

export async function createTask(task: CreatableTask) {
  let store = await loadLocalStorage();

  const storedUUIDs = store.default.map(({ uuid }) => uuid);

  let uuid;
  do {
    uuid = crypto.randomUUID();
  } while (storedUUIDs.includes(uuid));

  store = {
    ...store,
    default: [
      ...store.default,
      {
        ...task,
        uuid,
      },
    ],
  };
  await saveLocalStorage(store);
}

export const DeletableTask = Task.pick({ uuid: true });

export type DeletableTask = z.infer<typeof DeletableTask>;

export async function deleteTask(task: DeletableTask) {
  let store = await loadLocalStorage();
  store = {
    ...store,
    default: store.default.filter(({ uuid }) => uuid !== task.uuid),
  };
  await saveLocalStorage(store);
}
