import './CurrencyStyling.css'
import { useEffect, useState, useContext } from 'react'
import CurrencyConverter from './CurrencyConverter'
import CurrencyContext from './CurrencyContext'

const CurrencyDropdown = () => {
    const [currencyList, setCurrencyList] = useState([])
    const {setToCurrency, setFromCurrency} = useContext(CurrencyContext) // to consume the context
    
    
    const fakeResponseData = {
        supported_codes: [
            ["AED", "UAE Dirham"],
            ["SGD", "Singapore Dollar"],
            ["USD", "United States Dollar"],
            ["SDG", "Sudanese Pound"]
        ]
    }

    // fetch the list of all currencies using the API request given
    // should run once when component is first loaded
    useEffect(() => {
        // fetch("https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/codes")
        // .then((response) => { return response.json() })
        // .then((data) => {
        //     // console.log(data)
        //     setCurrencyList(data.supported_codes)
        // })

        // simulate the API request instead
        setCurrencyList(fakeResponseData.supported_codes)
    }, [])

    return (
        <div>

            <div className="container">
            <p>I want to convert</p>
            <select 
                name="currency" 
                id="currencySelect"
                onChange={(event)=>{
                    setFromCurrency(event.target.value)
                }}
                >
                {
                    currencyList.map((currencyArray) => {
                        return <option value={currencyArray[0]}>{currencyArray[1]}</option>
                    })
                }
            </select>
            <p>to</p>
            <select 
                name="currency" 
                id="currencySelect"
                onChange={(event)=>{
                    setToCurrency(event.target.value)
                }}
                >
                {
                    currencyList.map((currencyArray) => {
                        return <option value={currencyArray[0]}>{currencyArray[1]}</option>
                    })
                }
            </select>
            </div>  
            <CurrencyConverter />
        </div>
        
    )
}

export default CurrencyDropdown