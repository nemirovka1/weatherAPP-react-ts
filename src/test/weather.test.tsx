import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import { SearchSection } from "../components/SearchSection"

jest.mock('../api/api', () => ({
    getCurrentWeather: jest.fn(),
}));

describe('SearchSection Component', () => {
    it('renders the component', () => {
        const { getByPlaceholderText, getByText } = render(<SearchSection handleSetWeather={() => {}}/>)
        const inputElement = getByPlaceholderText('Search City')
        const submitButton = getByText('Submit')

        expect(inputElement).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
    })

    it('handles input change', () => {
        const { getByPlaceholderText } = render(<SearchSection handleSetWeather={() => {}} />)
        const inputElement: any = getByPlaceholderText('Search City')

        fireEvent.change(inputElement, { target: { value: 'New York' } })

        expect(inputElement.value).toBe('New York')
    })

    test('displays history list when input is focused', () => {
        render(<SearchSection handleSetWeather={() => {}} />)

        const input = screen.getByPlaceholderText('Search City')
        fireEvent.focus(input)
    })

})
