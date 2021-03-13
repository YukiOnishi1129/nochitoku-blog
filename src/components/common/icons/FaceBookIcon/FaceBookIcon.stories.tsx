/**
 * common/icons/FaceBookIcon
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { FaceBookIcon, FaceBookIconProps } from './index'

export default {
  title: 'common/icons/FaceBookIcon',
  component: FaceBookIcon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<FaceBookIconProps> = (args) => <FaceBookIcon {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {}
