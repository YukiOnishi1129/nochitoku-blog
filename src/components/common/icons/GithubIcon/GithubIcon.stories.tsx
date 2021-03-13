/**
 * common/icons/GithubIcon
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { GithubIcon, GithubIconProps } from './index'

export default {
  title: 'common/icons/GithubIcon',
  component: GithubIcon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<GithubIconProps> = (args) => <GithubIcon {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {}
