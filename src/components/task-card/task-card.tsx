import { component$, Slot } from '@builder.io/qwik';
import { Box } from '../box';
import { ButtonIcon } from '../button-icon';
import {
  Card,
  CARD_ACTIONS_SLOT,
  CARD_CONTENT_SLOT,
  CARD_HEADER_SLOT,
  CARD_MENU_SLOT,
} from '../card';
import { EllipsisHorizontalIcon } from '../icons/solid';

export const TASK_CARD_TAGS_SLOT = 'tags';
export const TASK_CARD_CONTENT_SLOT = 'content';
export const TASK_CARD_INFO_SLOT = 'info';

export const TaskCard = component$(() => {
  return (
    <Card full>
      <Box q:slot={CARD_HEADER_SLOT} wrap="nowrap" items="center" gap={2}>
        <Slot name={TASK_CARD_TAGS_SLOT} />
      </Box>

      <ButtonIcon q:slot={CARD_MENU_SLOT}>
        <EllipsisHorizontalIcon />
      </ButtonIcon>

      <Box q:slot={CARD_CONTENT_SLOT} className="py-1">
        <Slot name={TASK_CARD_CONTENT_SLOT} />
      </Box>

      <Box q:slot={CARD_ACTIONS_SLOT} wrap="nowrap" gap={4}>
        <Slot name={TASK_CARD_INFO_SLOT} />
      </Box>
    </Card>
  );
});
