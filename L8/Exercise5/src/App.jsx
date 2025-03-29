import './App.css'
import CurrencyDropdown from './CurrencyDropdown';
import CurrencyContext from './CurrencyContext';
import { useState } from 'react'

function App() {
  const [fromCurrency, setFromCurrency] = useState("SGD")
  const [toCurrency, setToCurrency] = useState("USD")

  return (
    <CurrencyContext.Provider value={{
      fromCurrency, 
      setFromCurrency, 
      toCurrency, 
      setToCurrency
      }}>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
    </CurrencyContext.Provider>
  )
}

export default App;
