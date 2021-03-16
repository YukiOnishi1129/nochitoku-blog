/**
 * common/icons/ClockIcon
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { ClockIcon, ClockIconProps } from './index'

export default {
  title: 'common/icons/ClockIcon',
  component: ClockIcon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<ClockIconProps> = (args) => <ClockIcon {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {}
