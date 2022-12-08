import { component$ } from '@builder.io/qwik';
import clsx from 'clsx';
import { ITaskModel } from '~/models/task.model';
import { format } from '~/utilities/date.utility';
import { Box } from '../box';
import { ButtonIcon } from '../button-icon';
import {
  Card,
  CARD_ACTIONS_SLOT,
  CARD_CONTENT_SLOT,
  CARD_HEADER_SLOT,
  CARD_MENU_SLOT,
  ICardProps,
} from '../card';
import { EllipsisHorizontalIcon, FlagIcon } from '../icons/solid';
import { Tag } from '../tag';
import { TaskAction } from '../task-action';

export interface ITaskCardProps extends ICardProps {
  task: ITaskModel;
}

export const TaskCard = component$(({ task, ...props }: ITaskCardProps) => {
  return (
    <Card full {...props}>
      <Box q:slot={CARD_HEADER_SLOT} wrap="nowrap" items="center" gap={2}>
        {task.tags.map((tag, id) => (
          <Tag key={id}>{tag}</Tag>
        ))}
      </Box>

      <ButtonIcon q:slot={CARD_MENU_SLOT}>
        <EllipsisHorizontalIcon />
      </ButtonIcon>

      <Box q:slot={CARD_CONTENT_SLOT} className="py-1">
        {task.content}
      </Box>

      <Box q:slot={CARD_ACTIONS_SLOT} wrap="nowrap" gap={4}>
        <TaskAction text={format(task.createdAt).MM().space().DD().toString()}>
          <FlagIcon
            sm
            className={clsx({
              'text-gray-400': !task.important,
              'text-red-400': task.important,
            })}
          />
        </TaskAction>
      </Box>
    </Card>
  );
});
