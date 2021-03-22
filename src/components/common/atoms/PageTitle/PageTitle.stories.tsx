/**
 * common/atoms/PageTitle
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
import { PageTitle, PageTitleProps } from './index'

export default {
  title: 'common/atoms/PageTitle',
  component: PageTitle,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {
  title: '「Node.js」',
}
