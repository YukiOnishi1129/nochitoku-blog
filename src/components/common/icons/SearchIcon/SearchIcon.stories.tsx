/**
 * common/icons/SearchIcon
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { SearchIcon, SearchIconProps } from './index'

export default {
  title: 'common/icons/SearchIcon',
  component: SearchIcon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<SearchIconProps> = (args) => <SearchIcon {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {}
