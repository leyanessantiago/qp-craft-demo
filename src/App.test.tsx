import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe('<App />', () => {
    test('should render', () => {
        render(<App />)
        const text = screen.getByText('Craft Demo');
        expect(text).toBeDefined()
    })
})