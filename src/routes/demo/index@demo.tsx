import { component$, Slot, useSignal } from '@builder.io/qwik';
import clsx from 'clsx';
import { Box } from '~/components/box/box';
import { ButtonIcon } from '~/components/button-icon';
import {
  Card,
  CARD_CONTENT_SLOT,
  CARD_HEADER_SLOT,
  CARD_MENU_SLOT,
} from '~/components/card';
import { EllipsisHorizontalIcon, FlagIcon } from '~/components/icons/solid';
import { Tag } from '~/components/tag/tag';
import { TaskCard } from '~/components/task-card';
import { Section } from './section';

export const Draggable = component$(() => {
  const isDragging = useSignal(false);

  return (
    <div
      className={clsx(
        'border-2 border-solid border-gray-600 bg-gray-300 rounded-md p-3 cursor-move',
        {
          'opacity-40': isDragging.value,
        }
      )}
      draggable="true"
      onDragStart$={() => {
        isDragging.value = true;
      }}
      onDragEnd$={() => {
        isDragging.value = false;
      }}
    >
      <Slot />
    </div>
  );
});

export const DropTarget = component$(() => {
  return <div></div>;
});

export default component$(() => {
  return (
    <main className="bg-slate-200 min-w-full min-h-screen py-8 flex flex-col gap-8">
      <Section>
        <Box>
          <FlagIcon />
          <FlagIcon sm />
          <FlagIcon className="text-gray-500" />
        </Box>

        <Box>
          <EllipsisHorizontalIcon />
          <EllipsisHorizontalIcon sm />
          <EllipsisHorizontalIcon className="text-slate-600" />
        </Box>
      </Section>

      <Section>
        <span className="px-4 py-1 bg-purple-200 text-purple-700 rounded-full">
          Copywriting
        </span>
        <span className="px-4 py-1 bg-sky-200 text-sky-700 rounded-full">
          UI Design
        </span>
        <span className="px-4 py-1 bg-emerald-200 text-emerald-700 rounded-full">
          Illustration
        </span>
        <Tag>Test</Tag>
      </Section>

      <Section>
        <Card>
          <Box q:slot={CARD_HEADER_SLOT}>
            <Tag>Test</Tag>
          </Box>

          <Box q:slot={CARD_CONTENT_SLOT}>
            Create the card component for tasks
          </Box>
        </Card>

        <div className="w-72">
          <Card full>
            <Box direction="row" gap={2} wrap="wrap" q:slot={CARD_HEADER_SLOT}>
              <Tag>Filled</Tag>
              <Tag>Card</Tag>
            </Box>

            <ButtonIcon q:slot={CARD_MENU_SLOT}>
              <EllipsisHorizontalIcon />
            </ButtonIcon>

            <div q:slot={CARD_CONTENT_SLOT}>A filled card</div>
          </Card>
        </div>
      </Section>

      <Section>
        <TaskCard
          task={{
            id: '1',
            tags: ['Task', 'Card'],
            content: 'Content',
            createdAt: new Date(),
            modifiedAt: new Date(),
            important: false,
          }}
        />

        <TaskCard
          task={{
            id: '1',
            tags: ['Task', 'Card'],
            content: 'Content',
            createdAt: new Date(),
            modifiedAt: new Date(),
            important: true,
          }}
        />
      </Section>

      <Section>
        <div className="grid grid-cols-5 gap-3">
          <Draggable>A</Draggable>
          <Draggable>B</Draggable>
          <Draggable>C</Draggable>
        </div>
      </Section>
    </main>
  );
});
