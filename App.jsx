
import './App.css'

function App() {
const currTime = new Date();
//i can set time manually to see , how it behaves at diffing time
currTime.setHours(8);
currTime.setMinutes(2);

const hours = currTime.getHours();
const name = "malaika";

let greetings;
if(hours >=1 && hours < 12){
  greetings = <span style = {{color: "yellow"}}>Good morning</span>
}
else if(hours >= 12 && hours < 19){
greetings = <span style = {{color: "brown"}}>Good Afternoon</span>
}
else{
  greetings = <span style = {{color:'purple'}}>Good Evening</span>
}

  return (
<>
  <div className = "div1">
   <h1 style = {{fontSize: "2rem"} }> Hello {name} ! {greetings}</h1>
  </div>
  </>

  );
}

export default App
