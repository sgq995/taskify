import { PropFunction, component$ } from '@builder.io/qwik';
import { Card, CardContent, CardHeader, CardTitle } from '../cards';
import { CardTop } from '../cards/card-top';
import { Button } from '../button';
import { TbTrash } from '@qwikest/icons/tablericons';

export type TaskProps = {
  title: string;
  description: string;
  onDelete$: PropFunction<() => void>;
};

export const Task = component$<TaskProps>(
  ({ title, description, onDelete$ }) => {
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
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent>{description}</CardContent>
      </Card>
    );
  }
);
