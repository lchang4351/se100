import "./CurrencyStyling.css"
import { useState, useEffect } from "react"

const CurrencyDropdown = () => {
    const [currencyList, setCurrencyList] = useState([]);

    


    useEffect (() => {
            fetch('https://v6.exchangerate-api.com/v6/c3ff2fffe8e4bf7278252a23/codes')
                .then((response) => { return response.json() })
                .then((data) => {
                    setCurrencyList(data.supported_codes)
                })
        },[])
    
    
    return (
        <div className="container">

        <p>I want to convert</p>
        <select name="currency" id="currencySelect">
            {
                currencyList.map ((currencyArray) => {
                    return <option value={currencyArray[0]}>{currencyArray[1]}</option>
                })
            }
            <option value="usd">USD</option>
            <option value="jpy">JPY</option>
            <option value="sgd">SGD</option>
            <option value="myr">MYR</option>
        </select>
        <p> to </p>
        <select name="currency" id="currencySelect">
            <option value="usd">USD</option>
            <option value="jpy">JPY</option>
            <option value="sgd">SGD</option>
            <option value="myr">MYR</option>
        </select>
        </div>
      )
}

export default CurrencyDropdown