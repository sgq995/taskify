import { component$ } from '@builder.io/qwik';
import { Card, CardContent, CardHeader, CardTitle } from '../cards';

export type TaskProps = {
  title: string;
  description: string;
};

export const Task = component$<TaskProps>(({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{description}</CardContent>
    </Card>
  );
});
