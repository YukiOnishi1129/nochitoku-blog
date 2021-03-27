/**
 * common/atoms/FacebookShareButton
 * Storybook
 * @package Component
 */

import { Story, Meta } from '@storybook/react/types-6-0'
import { FacebookShareButton, FacebookShareButtonProps } from './index'

export default {
  title: 'common/atoms/FacebookShareButton',
  component: FacebookShareButton,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<FacebookShareButtonProps> = (args) => (
  <FacebookShareButton {...args} />
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
