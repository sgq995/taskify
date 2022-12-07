import { component$, Slot } from '@builder.io/qwik';
import clsx from 'clsx';
import { Paper } from '../paper';

export const CARD_HEADER_SLOT = 'header';
export const CARD_MENU_SLOT = 'menu';
export const CARD_CONTENT_SLOT = 'content';
export const CARD_ACTIONS_SLOT = 'actions';

export interface ICardProps {
  full?: boolean;
  className?: string;
}

export const Card = component$(({ full, className }: ICardProps) => {
  return (
    <Paper
      className={clsx(className, 'p-4', 'flex flex-col gap-2', {
        'w-full': !!full,
      })}
    >
      <header className="flex justify-between">
        <Slot name={CARD_HEADER_SLOT} />

        <span className="flex-grow-0">
          <Slot name={CARD_MENU_SLOT} />
        </span>
      </header>

      <Slot name={CARD_CONTENT_SLOT} />

      <Slot name={CARD_ACTIONS_SLOT} />
    </Paper>
  );
});
