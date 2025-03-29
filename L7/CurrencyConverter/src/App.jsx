import './App.css'

import React, { useEffect } from "react";

import CurrencyDropdown from './CurrencyDropdown.jsx';


function App() {

  // useEffect(() => {
  //   console.log("Making API request...") //Exercise 7 see in console for results
  //   // fetch('https://api.example.com/data')
  //   //   .then(response => response.json())
  //   //   .then(data => console.log(data));
  // }, []); // Empty dependency array means this effect runs only once after the initial render


  // function hoverAlert() {
  //   // Exercise 5: modify when cursor hovers over, it triggers an alert
  //   alert('Just Click!!');
  // }

  // const optionSelected = (event) =>  {
  //   //event handler for Exercise 6
  //   // alert('New option selected!')
  //   alert(`I have selected option: ${event.target.value}`)
  // }
  return (
    <>
    <h1>Currency Converter</h1>
    <CurrencyDropdown />

    </>
  )
}

export default App;
