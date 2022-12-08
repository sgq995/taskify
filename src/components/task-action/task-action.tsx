import { component$, Slot } from '@builder.io/qwik';
import { Box } from '../box';
import { ButtonIcon, IButtonIconProps } from '../button-icon';

export const TASK_ACTION_ICON_SLOT = 'icon';

export interface ITaskActionProps extends IButtonIconProps {
  text: string;
}

export const TaskAction = component$((props: ITaskActionProps) => {
  return (
    <Box gap={2}>
      <ButtonIcon {...props}>
        <Slot />
      </ButtonIcon>
      <span className="text-sm text-gray-500">{props.text}</span>
    </Box>
  );
});
