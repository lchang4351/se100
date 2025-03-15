//Exercise 2
const domContainer = document.getElementById('root'); 
const root = ReactDOM.createRoot(domContainer);


function WelcomeHeader() {
    return <p>Welcome Messages</p> 
       
}

function WelcomeLists() {
    return <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
    </ul>
}

function App() {
    return <div>
        <WelcomeHeader />
        <WelcomeLists />
    </div>
}

root.render(
    <App />
);