import React, { ChangeEvent } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Textarea from './Textarea'

export default {
  title: 'ReactComponentLibrary/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

export const _Textarea: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = React.useState('')
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    args.onChange(event)
  }
  return (
    <>
      <Textarea
        {...args}
        placeholder="テキストエリア"
        row={3}
        borderColor="default"
        maxLength={100}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
