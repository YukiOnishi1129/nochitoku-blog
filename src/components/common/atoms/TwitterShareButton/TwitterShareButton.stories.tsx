/**
 * common/atoms/TwitterShareButton
 * Storybook
 * @package Component
 */

import { Story, Meta } from '@storybook/react/types-6-0'
import { TwitterShareButton, TwitterShareButtonProps } from './index'

export default {
  title: 'common/atoms/TwitterShareButton',
  component: TwitterShareButton,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<TwitterShareButtonProps> = (args) => (
  <TwitterShareButton {...args} />
)

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {
  shareUrl: 'https://read-engineer.com/',
  size: 40,
  radius: 10,
}
