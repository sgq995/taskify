import { component$, Slot } from '@builder.io/qwik';
import clsx from 'clsx';

export interface IBoxProps {
  direction?: 'col' | 'row' | 'col-reverse' | 'row-reverse';
  gap?: number;
  justify?: 'start' | 'end' | 'center' | 'between' | 'arround' | 'evenly';
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  className?: string;
}

export const Box = component$(
  ({ direction, gap, justify, items, wrap, className }: IBoxProps) => {
    return (
      <div
        className={clsx(className, 'flex', {
          [`flex-${direction}`]: direction,
          [`gap-${gap}`]: typeof gap === 'number' && !isNaN(gap),
          [`justify-${justify}`]: justify,
          [`items-${items}`]: items,
          [`flex-${wrap}`]: wrap,
        })}
      >
        <Slot />
      </div>
    );
  }
);
