import React from 'react'
import { render } from '@testing-library/react'

import TextArea from './Textarea'

describe('Textarea', () => {
  test('renders the Textarea component', () => {
    render(<TextArea placeholder="テキスト入力" borderColor="default" onChange={(e) => {console.log(e.target.value)}}/>)
  })
})
