/**
 * common/molcules/SearchInputForm
 * Storybook
 * @package Component
 */
import { Story, Meta } from '@storybook/react/types-6-0'
/* components */
import { Presenter as SearchInputForm, SearchInputFormProps } from './Presenter'

export default {
  title: 'common/molcules/SearchInputForm',
  component: SearchInputForm,
  argTypes: {},
} as Meta

/**
 * templates
 * @param args
 * @returns
 */
const Template: Story<SearchInputFormProps> = (args) => (
  <SearchInputForm {...args} />
)

/**
 * sample
 */
export const Primary = Template.bind({})
Primary.args = {
  text: '検索',
  placeholder: '入力してください',
}
