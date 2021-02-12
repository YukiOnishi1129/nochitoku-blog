import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { SampleText } from './index'

afterEach(cleanup)

describe('sample text test', () => {
  it('test', (): void => {
    const { getByRole } = render(<SampleText />)
    expect(getByRole('test-text').textContent).toBe('テキスト')
  })
  it.todo('Index TODO')
})
