// exercise6



function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
  function WelcomeMessages(props){
    return(
        <li>Welcome {props.name} from {props.country}</li>
        
    )
    }

//   function WelcomeMessageTom() {
//     return <li>Welcome Tom from Singapore</li>
//   }
  
//   function WelcomeMessageJerry() {
//     return <li>Welcome Jerry from Malaysia</li>
//   }
  
//   function WelcomeMessageSarah() {
//     return <li>Welcome Sarah from Indonesia</li>
//   }
  
  function WelcomeMessagesList(props) {
    const users = [
        { name: 'Tom', country: 'Singapore' },
        { name: 'Jerry', country: 'Malaysia' },
        { name: 'Sarah', country: 'Indonesia' }
    ];

    return users.map ((userData) => {
        return(
            <WelcomeMessage 
                key={userData.name} 
                //additional line above; for optimization 
                //needs to be something unique within the dataset
                name={userData.name}
                country={userData.country}
            />
        )
    })
   
  }
  
  function WelcomeMessagesSection() {
    return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  }
  
  function App() {
    return <div>
      <WelcomeMessagesSection />
    </div>
  }
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />)