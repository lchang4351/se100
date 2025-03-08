fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=2CW52HR5Y0COT7I0')
    .then(data => data.json())
    // .then(output => console.log(output)) 

    // Exercise 7
    .then(body => {
        const annualEarnings = body['annualEarnings'];//extracts annual earnings; they are objects
        for (let i=0; i < annualEarnings.length; i++){ //loop through annual earnings
            const current = annualEarnings[i]
            if (current["fiscalDateEnding"].includes("2020")){ //find specific data
                console.log(current["reportedEPS"])
                return//returns the value found
            }
        } 
        console.log(output)
    })
    .catch(value => console.log(value)) //good practice to handle any errors