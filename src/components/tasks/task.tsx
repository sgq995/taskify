import type { PropFunction } from '@builder.io/qwik';
import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { Card, CardContent, CardHeader, CardTitle } from '../cards';
import { CardTop } from '../cards/card-top';
import { Button } from '../button';
import { TbTrash } from '@qwikest/icons/tablericons';
import { Control } from '../forms/control';
import { Input, Textarea } from '../forms';

export type TaskProps = {
  title: string;
  description: string;
  onUpdate$: PropFunction<
    (task: { title: string; description: string }) => void
  >;
  onDelete$: PropFunction<() => void>;
};

export const Task = component$<TaskProps>(
  ({ title, description, onUpdate$, onDelete$ }) => {
    const isEditing = useStore({
      title: false,
      description: false,
    });

    const titleRef = useSignal<HTMLInputElement>();

    const handleTitleUpdate = $(async () => {
      await onUpdate$({
        title: titleRef.value?.value ?? '',
        description,
      });
      isEditing.title = false;
    });

    const descriptionRef = useSignal<HTMLTextAreaElement>();

    const handleDescriptionUpdate = $(async () => {
      await onUpdate$({
        title,
        description: descriptionRef.value?.value ?? '',
      });
      isEditing.description = false;
    });

    return (
      <Card>
        <CardTop>
          <Button
            class="ml-auto rounded-full bg-transparent hover:bg-red-200 active:bg-red-100"
            onClick$={onDelete$}
          >
            <TbTrash class="stroke-red-500 stroke-2" />
          </Button>
        </CardTop>

        <CardHeader>
          {isEditing.title ? (
            <Input
              ref={titleRef}
              label="title"
              value={title}
              autoFocus
              onBlur$={handleTitleUpdate}
              onKeyDown$={async (event) => {
                if (event.key === 'Enter') {
                  await handleTitleUpdate();
                }
              }}
            />
          ) : (
            <Control
              onClick$={() => {
                isEditing.title = true;
              }}
            >
              <CardTitle>{title}</CardTitle>
            </Control>
          )}
        </CardHeader>

        <CardContent>
          {isEditing.description ? (
            <Textarea
              ref={descriptionRef}
              label="Description"
              value={description}
              autoFocus
              onBlur$={handleDescriptionUpdate}
              onKeyDown$={async (event) => {
                if (event.key === 'Enter') {
                  await handleDescriptionUpdate();
                }
              }}
            />
          ) : (
            <Control
              onClick$={() => {
                isEditing.description = true;
              }}
            >
              {description}
            </Control>
          )}
        </CardContent>
      </Card>
    );
  }
);
