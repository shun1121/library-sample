import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GoSearch } from 'react-icons/go'

import Input from './Input'

export default {
  title: 'ReactComponentLibrary/Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const _Input: ComponentStory<typeof Input> = (args) => (
  <>
    <div className="flex gap-4">
      <Input placeholder='テキスト入力' borderColor='default' {...args} />
      <Input borderColor='default' prefix={<GoSearch />} {...args} />
    </div>
  </>
)
