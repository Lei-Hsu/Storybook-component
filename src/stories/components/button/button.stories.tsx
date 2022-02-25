/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Fill = Template.bind({});
// Fill.args = {
//   buttonCustomClassName: 'text-red-500',
// };
export const Outline = Template.bind({});
Outline.args = {
  btnStyle: 'outline',
};
