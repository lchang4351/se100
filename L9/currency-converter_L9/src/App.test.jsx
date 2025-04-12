import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
    it('should render correctly', () => {
        // Arrange
        render(<App />)

        // Act
        // no user action involved for this example

        // Assert
        // expect(...).toBeSomething(...)

        expect(screen.getByText("Currency Converter")).toBeInTheDocument()

        //sanity check, make sure it can fail as well
        // expect(screen.getByText("hello world")).toBeInTheDocument()

        // Act (2) - can do more than one

        // Assert (2) - can do more than one
    })
})

// to run this test, on terminal npm run test
// if have to install dependency, then go ahead
// then npm run test again