import { component$, Slot } from '@builder.io/qwik';
import clsx from 'clsx';

export interface IBoxProps {
  axis: 'vertical' | 'horizontal';
  gap?: number;
  justify?: 'start' | 'end' | 'center' | 'between' | 'arround' | 'evenly';
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  className?: string;
}

export const Box = component$(
  ({ axis, gap, justify, items, className }: IBoxProps) => {
    return (
      <div
        className={clsx(
          className,
          'flex',
          axis === 'vertical' ? 'flex-col' : 'flex-row',
          {
            [`gap-${gap}`]: typeof gap === 'number' && !isNaN(gap),
            [`justify-${justify}`]: justify,
            [`items-${items}`]: items,
          }
        )}
      >
        <Slot />
      </div>
    );
  }
);
