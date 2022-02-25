/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'components/Buttonn',
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Fill = Template.bind({});
Fill.args = {
  style: 'w-100 h-20 bg-red-500 text-red-500',
};
