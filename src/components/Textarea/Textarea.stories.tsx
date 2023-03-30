import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Textarea from './Textarea'

export default {
  title: 'ReactComponentLibrary/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

export const _Textarea: ComponentStory<typeof Textarea> = (args) => (
  <>
    <Textarea placeholder='テキストエリア' row={3} {...args} />
  </>
)
