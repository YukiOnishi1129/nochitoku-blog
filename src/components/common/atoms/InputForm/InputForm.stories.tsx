/**
 * common/atoms/InputForm
 * StoryBook
 * @package Component
 */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
/* components */
import { InputForm, InputFormProps } from './index'

export default {
  title: 'common/atoms/InputForm',
  component: InputForm,
  argTypes: {},
} as Meta

/**
 * Template
 * @param args InputFormProps
 * @returns
 */
const Template: Story<InputFormProps> = (args) => <InputForm {...args} />

/**
 * samples
 */
export const Primary = Template.bind({})
Primary.args = {
  text: '',
  placeholder: '入力してください',
}
