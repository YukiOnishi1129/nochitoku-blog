// jest使うにはこれが必要
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import { InputForm } from './index'

afterEach(cleanup)
describe('input form test', () => {
  it('test', (): void => {
    render(
      <InputForm
        text="テキスト"
        placeholder="入力"
        onChange={() => {}}
        onClick={() => {}}
      />
    )

    const input = screen.getByRole('test-input-form')
    expect(input).toBeInTheDocument()
    // fireEvent.change(input, {
    //   target: {
    //     value: 'test',
    //   },
    // })
    expect(input).toHaveValue('テキスト')
  })
})
