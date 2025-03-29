import { useState,useEffect, useContext } from 'react'
import CurrencyContext from './CurrencyContext'

const CurrencyConverter = () => {
    const {fromCurrency, toCurrency} = useContext(CurrencyContext)

   
    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState("")

    //only interested in conversion result. the amount is included in the url path
    const fakeConversionResult = {
        conversion_result: 3.546
    }

    useEffect(()=>{
        // fetch(`https://v6.exchangerate-api.com/v6/c3ff2fffe8e4bf7278252a23/pair/${fromCurrency}/${toCurrency}/${fromAmount}`)
        // .then((response) => { return response.json() })
        // .then((data)=>{
        //     setToAmount(data.conversion_result)
            //simulate api request
        
        // })
        setToAmount(fakeConversionResult.conversion_result * fromAmount)
    },[fromCurrency, toCurrency, fromAmount]) //triggers useEffect when either one of three values changes

    return (
        <div className="container">
            <input 
                value={fromAmount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={(event) => {
                    setFromAmount(event.target.value)
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p>{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter