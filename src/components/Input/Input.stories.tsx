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
    <Input borderColor="default" width='sm' shape='default' />
    <br />
    <Input borderColor="default" width='md' shape='rounded-md' />
    <br />
    <Input borderColor="default" width='lg' shape='rounded-full' />
    <br />
    <div className="flex gap-4">
      <Input placeholder="テキスト入力" borderColor="default" {...args} />
      <Input borderColor="default" prefix={<GoSearch />} {...args} />
      <Input borderColor="default" suffix={<GoSearch />} {...args} />
    </div>
    <br />
    <Input borderColor="default" label="テキストを入力してください。" />
    <br />
    <Input borderColor="default" width='sm' shape='rounded-md' placeholder="非活性" disabled />
  </>
)
