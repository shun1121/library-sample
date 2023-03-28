import React from 'react'
import { render } from '@testing-library/react'

import Input from './Input'

describe('Input', () => {
  test('renders the Input component', () => {
    render(<Input placeholder='テキスト入力' borderColor="default" />)
  })
})