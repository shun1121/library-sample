import React from 'react'
import { render } from '@testing-library/react'

import Textarea from './Textarea'

describe('Textarea', () => {
  test('renders the Textarea component', () => {
    render(<Textarea placeholder="テキスト入力" borderColor="default" onChange={(e) => {console.log(e.target.value)}}/>)
  })
})
