/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import IndexPage from '../src/pages/index'

it('Should render title text', () => {
  render(<IndexPage />)
  expect(screen.getByText('Next-TS-Hasura-GraphQL')).toBeInTheDocument()
})