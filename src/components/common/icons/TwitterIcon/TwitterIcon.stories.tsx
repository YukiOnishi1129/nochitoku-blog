/**
 * common/icons/TwitterIcon
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { TwitterIcon, TwitterIconProps } from './index'

export default {
  title: 'common/icons/TwitterIcon',
  component: TwitterIcon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<TwitterIconProps> = (args) => <TwitterIcon {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {}
