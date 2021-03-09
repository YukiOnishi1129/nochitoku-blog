/**
 * common/atoms/InputForm
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { InputForm, InputFormProps } from './index'

export default {
  title: 'common/atoms/InputForm',
  component: InputForm,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<InputFormProps> = (args) => <InputForm {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {
  text: '',
  placeholder: '入力してください',
}
