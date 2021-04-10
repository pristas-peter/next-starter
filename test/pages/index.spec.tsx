import { render } from '@testing-library/react'
import Home from '../../pages'

test('Check for Getting Started Text', () => {
  const { getByText } = render(<Home />)
  expect(getByText('Get started by editing')).toBeInTheDocument()
})
