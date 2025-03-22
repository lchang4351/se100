import './App.css'

import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Making API request...") //Exercise 7 see in console for results
    // fetch('https://api.example.com/data')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  }, []); // Empty dependency array means this effect runs only once after the initial render


  function hoverAlert() {
    // Exercise 5: modify when cursor hovers over, it triggers an alert
    alert('Just Click!!');
  }

  const optionSelected = (event) =>  {
    //event handler for Exercise 6
    // alert('New option selected!')
    alert(`I have selected option: ${event.target.value}`)
  }
  return (
    <>
      <h1>Currency Converter</h1>
      {/* <button onMouseEnter={hoverAlert}>
        Click me
      </button> */}

      {/* below is Exercise 6: onChange to have an alert */}
      <select name="currency" id="currencySelect" onChange={optionSelected}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>

      <h1>useEffect demo</h1>
    </>
  )
}

export default App;
