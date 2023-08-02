import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', () => {
  it('Should be render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Boilerplate para projetos NextJS/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should be render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
      color: '#fff'
    })
  })
})
