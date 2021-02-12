import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { SampleText } from './index'

export default {
  title: 'common/atoms/Sampletext',
  component: SampleText,
  argTypes: {},
} as Meta

const Template: Story = () => <SampleText />

export const Primary = Template.bind({})
