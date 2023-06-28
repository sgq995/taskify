import type { PropFunction } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { Card, CardContent, CardFooter, CardHeader } from '../cards';
import { Input } from '../forms/input';
import { Textarea } from '../forms';
import type { CreatableTask } from '~/store';

export type TaskFormProps = {
  onSave$: PropFunction<(task: CreatableTask) => void>;
};

export const TaskForm = component$<TaskFormProps>(({ onSave$ }) => {
  const inputRef = useSignal<HTMLInputElement>();
  const textareaRef = useSignal<HTMLTextAreaElement>();

  return (
    <form preventdefault:submit>
      <Card>
        <CardHeader>
          <Input ref={inputRef} label="Title" />
        </CardHeader>

        <CardContent>
          <Textarea ref={textareaRef} label="Description" />
        </CardContent>

        <CardFooter>
          <button
            onClick$={() =>
              onSave$({
                title: inputRef.value?.value ?? '',
                description: textareaRef.value?.value ?? '',
              })
            }
            class="w-full rounded bg-sky-600 p-2 text-white hover:bg-sky-500 active:bg-sky-700"
          >
            SAVE
          </button>
        </CardFooter>
      </Card>
    </form>
  );
});
