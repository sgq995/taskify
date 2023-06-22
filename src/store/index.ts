import { z } from 'zod';

const Task = z.object({
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

const Store = z.object({
  /**
   * The list of tasks the user has added
   */
  default: z.array(Task),
});

export type Store = z.infer<typeof Store>;

const DEFAULT_STORE: Readonly<Store> = Object.freeze({
  default: [],
});

const STORE_KEY = 'store';

function resetLocalStorage() {
  const flatStore = JSON.stringify(DEFAULT_STORE);
  localStorage.setItem(STORE_KEY, flatStore);
  return flatStore;
}

export async function loadLocalStorage() {
  let flatStore = localStorage.getItem(STORE_KEY);
  if (flatStore === null) {
    flatStore = resetLocalStorage();
  }

  const rawStore = JSON.parse(flatStore);
  let store: Readonly<Store>;
  try {
    store = Object.freeze(Store.parse(rawStore));
  } catch {
    resetLocalStorage();
    store = DEFAULT_STORE;
  }

  return store;
}

export async function saveLocalStorage(store: Readonly<Store>) {
  // Sanity check
  Store.parse(store);

  const flatStore = JSON.stringify(store);
  localStorage.setItem(STORE_KEY, flatStore);
}
