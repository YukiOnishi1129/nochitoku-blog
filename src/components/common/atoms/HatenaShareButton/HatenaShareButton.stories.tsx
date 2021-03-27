/**
 * common/atoms/HatenaShareButton
 * Storybook
 * @package Component
 */

import { Story, Meta } from '@storybook/react/types-6-0'
import { HatenaShareButton, HatenaShareButtonProps } from './index'

export default {
  title: 'common/atoms/HatenaShareButton',
  component: HatenaShareButton,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<HatenaShareButtonProps> = (args) => (
  <HatenaShareButton {...args} />
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
