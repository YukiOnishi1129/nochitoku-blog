/**
 * common/molcules/DateArea
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
/* components */
import { Presenter as DateArea, DateAreaProps } from './Presenter'

export default {
  title: 'common/molcules/DateArea',
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
  showDate: '2021.01.01',
}
