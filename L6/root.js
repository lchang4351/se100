const domContainer = document.getElementById('root'); //div that React will take over
const root = ReactDOM.createRoot(domContainer);
root.render(<p>This is inside root.js</p>) //render the new elment into div

//another example
const element = <h1>Hello, JSX!</h1>;
root.render(element)

//can use as a function - React components are functions!
function WelcomeHeader() {
    return (<h1>Welcome Messages</h1>)
}
//then call below
root.render(WelcomeHeader())//function call method
//or
root.render(<WelcomeHeader />) //react method component; must be capitalized


// props is an object
// {
//  "name": "jeremy",
//  "email": "test@gmail.com"
// }
function RandomComponent (props) { 
//this function is like a template to be used to parse in props that you want to add in later
    console.log(props.name)
    //any other normal logic

    return(
        <div className="user-info">
            {/* within here need to wrap in curly braces */}
            <h2>{props.name}</h2> 
            <p>Email: {props.email}</p>
        </div>
    )
}

