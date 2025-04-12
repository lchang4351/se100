import { describe, it, expect } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'


import CurrencyConverter from "./CurrencyConverter"
import CurrencyContext from '../contexts/CurrencyContext'

describe('CurrencyConverter component', () => {
    it('should render correctly', () => {
        //Arrange
        render(
                <CurrencyContext.Provider value ={{
                    fromCurrency:"SGD", //can hard code values to whatever you want to test
                    toCurrency:"USD"
                }}>
                    <CurrencyConverter />
                </CurrencyContext.Provider>
            )
        //Act
        //no user action

        //Assert
        expect(screen.getByPlaceholderText('Enter amount')).toBeInTheDocument();
        expect(screen.getByText('=')).toBeInTheDocument();
        expect(screen.getByText('SGD')).toBeInTheDocument();
        expect(screen.getByText('USD')).toBeInTheDocument();

    })

    it("should show the correct output for a given input", () => {
        // Arrange
        render(
            <CurrencyContext.Provider value ={{
                fromCurrency:"SGD", //can hard code values to whatever you want to test
                toCurrency:"USD"
            }}>
                <CurrencyConverter />
            </CurrencyContext.Provider>
        )
        // Act
        const fromAmountInput = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(fromAmountInput, { target: { value: 10 } })

        // Assert
        // expect(screen.getByText('10').toBeInTheDocument()) // no point making an assertion because this is a simulated user input
        expect(screen.getByText('20')).toBeInTheDocument()

        

    })

    //exercise 3
    it("should show default value of 0", () => {
        render(
            <CurrencyContext.Provider value ={{
                fromCurrency:"SGD", //can hard code values to whatever you want to test
                toCurrency:"USD"
            }}>
                <CurrencyConverter />
            </CurrencyContext.Provider>
        )

        const fromAmountInput = screen.getByPlaceholderText("Enter amount")

        fireEvent.change(fromAmountInput, { target: { value: '' } });
        expect(screen.getByText('0')).toBeInTheDocument()
    })

    //exercise 4
    it("should show updated currencies after user selects new currency", () => {
        //arrange
        const { rerender } = render(
            <CurrencyContext.Provider value ={{
                fromCurrency:"SGD", //can hard code values to whatever you want to test
                toCurrency:"USD"
            }}>
                <CurrencyConverter />
            </CurrencyContext.Provider>
        )
        //act
        // user hasn't done anything yet

        //assert
        expect(screen.getByText("SGD")).toBeInTheDocument()
        expect(screen.getByText("USD")).toBeInTheDocument()

        //user has selected new currencies, context is updated
        //making use of rerender function defined above
        rerender(<CurrencyContext.Provider value ={{
            fromCurrency:"GBP", 
            toCurrency:"JPY"
        }}>
            <CurrencyConverter />
        </CurrencyContext.Provider>
        )

        //act still not relevant

        //assert
        expect(screen.getByText("GBP")).toBeInTheDocument()
        expect(screen.getByText("JPY")).toBeInTheDocument()

    })

    //exercise 5, copy/paste from Ex4 with some updates
    it("should show updated currencies after user selects new currency", () => {
        //arrange
        const { rerender } = render(
            <CurrencyContext.Provider value ={{
                fromCurrency:"SGD", //can hard code values to whatever you want to test
                toCurrency:"USD"
            }}>
                <CurrencyConverter />
            </CurrencyContext.Provider>
        )
        //act
        const fromAmountInput = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(fromAmountInput, { target: { value: 10 } })

        //assert
        expect(screen.getByText("SGD")).toBeInTheDocument()
        expect(screen.getByText("USD")).toBeInTheDocument()
        expect(screen.getByText("20")).toBeInTheDocument()

        //user has selected new currencies, context is updated
        //making use of rerender function defined above
        rerender(<CurrencyContext.Provider value ={{
            fromCurrency:"GBP", 
            toCurrency:"JPY"
        }}>
            <CurrencyConverter />
        </CurrencyContext.Provider>
        )

        //act 
        

        //assert
        expect(screen.getByText("GBP")).toBeInTheDocument()
        expect(screen.getByText("JPY")).toBeInTheDocument()
        expect(screen.getByText("20")).toBeInTheDocument()
        //same output value because it is hard coded to be double of input

    })

    //exercise 6

    // it("should handle negative inputs", () => {
    //     //arrange
    //     const { rerender } = render(
    //         <CurrencyContext.Provider value ={{
    //             fromCurrency:"SGD", //can hard code values to whatever you want to test
    //             toCurrency:"USD"
    //         }}>
    //             <CurrencyConverter />
    //         </CurrencyContext.Provider>
    //     )
    //     //act
    //     const fromAmountInput = screen.getByPlaceholderText("Enter amount")
    //     fireEvent.change(fromAmountInput, { target: { value: "-10" } })

    //     //assert
    //     expect(screen.getByText("-20")).toBeInTheDocument() // edge case failed
    // })

    // it("should handle non-number inputs", () => {
    //     //arrange
    //     render(
    //         <CurrencyContext.Provider value ={{
    //             fromCurrency:"SGD", //can hard code values to whatever you want to test
    //             toCurrency:"USD"
    //         }}>
    //             <CurrencyConverter />
    //         </CurrencyContext.Provider>
    //     )
    //     //act
    //     const fromAmountInput = screen.getByPlaceholderText("Enter amount")
    //     fireEvent.change(fromAmountInput, { target: { value: "abc" } })

    //     //assert
    //     expect(screen.getByText("NaN")).toBeInTheDocument() // edge case failed
    // })

    //exercise 7
    it('should handle negative amounts', () => {
        render(
            <CurrencyContext.Provider value ={{
                fromCurrency:"SGD", //can hard code values to whatever you want to test
                toCurrency:"USD"
            }}>
                <CurrencyConverter />
            </CurrencyContext.Provider>
        )
        //act
        const input = screen.getByPlaceholderText('Enter amount');
        fireEvent.change(input, { target: { value: '-10' } });
        //assert
        expect(screen.getByText('0')).toBeInTheDocument(); // Shouldn't calculate with invalid input
      });
      
      it('should handle non-numeric input gracefully', () => {
        render(
            <CurrencyContext.Provider value ={{
                fromCurrency:"SGD", //can hard code values to whatever you want to test
                toCurrency:"USD"
            }}>
                <CurrencyConverter />
            </CurrencyContext.Provider>
        )
        //act
        const input = screen.getByPlaceholderText('Enter amount');
        fireEvent.change(input, { target: { value: 'abc' } });
        //assert
        expect(screen.getByText('0')).toBeInTheDocument(); // No calculation for invalid input
      });
})