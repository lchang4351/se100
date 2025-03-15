// exercise3



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
  
  function WelcomeMessagesList() {
    return <ul>
      <WelcomeMessages 
        name="Tom"
        country="Singapore"
      />
      <WelcomeMessages 
        name="Jerry"
        country="Malaysia"
      />
      <WelcomeMessages 
        name="Sarah"
        country="Indonesia"
      />
    </ul>
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