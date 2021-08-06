/**
 * common/molecules/DateArea
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
/* components */
import { DateArea, DateAreaProps } from './index'

export default {
  title: 'common/molecules/DateArea',
  component: DateArea,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<DateAreaProps> = (args) => <DateArea {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {
  date: '2021.01.01',
}
