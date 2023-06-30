import type { PropFunction } from '@builder.io/qwik';
import { component$, useSignal, useStore } from '@builder.io/qwik';
import { Card, CardContent, CardFooter, CardHeader } from '../cards';
import { Input } from '../forms/input';
import { Textarea } from '../forms';
import type { CreatableTask } from '~/store';
import { Button } from '../button';
import { validateTaskDescription, validateTaskTitle } from '~/store/validators';

export type TaskFormProps = {
  onSave$: PropFunction<(task: CreatableTask) => void>;
};

export const TaskForm = component$<TaskFormProps>(({ onSave$ }) => {
  const error = useStore({
    title: false,
    description: false,
  });

  const inputRef = useSignal<HTMLInputElement>();
  const textareaRef = useSignal<HTMLTextAreaElement>();

  return (
    <form preventdefault:submit>
      <Card>
        <CardHeader>
          <Input ref={inputRef} label="Title" error={error.title} />
        </CardHeader>

        <CardContent>
          <Textarea
            ref={textareaRef}
            label="Description"
            error={error.description}
          />
        </CardContent>

        <CardFooter>
          <Button
            onClick$={async () => {
              let hasError = false;

              const title = inputRef.value?.value ?? '';
              try {
                validateTaskTitle(title);
                error.title = false;
              } catch {
                hasError = true;
                error.title = true;
              }

              const description = textareaRef.value?.value ?? '';
              try {
                validateTaskDescription(description);
                error.description = false;
              } catch {
                hasError = true;
                error.description = true;
              }

              if (hasError) {
                return;
              }

              await onSave$({
                title,
                description,
              });
            }}
            class="w-full rounded"
          >
            SAVE
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
});
