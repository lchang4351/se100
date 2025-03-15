//Exercise 1
const domContainer = document.getElementById('root'); 
const root = ReactDOM.createRoot(domContainer);
root.render( //need the additional fragment <></> for multiple html elements used
    <div> 
        {/* he used h1? */}
        <p>Welcome Messages</p> 
        <ul>
            <li>Welcome Tom from Singapore</li>
            <li>Welcome Jerry from Malaysia</li>
            <li>Welcome Sarah from Indonesia</li>
        </ul>
    </div>
)