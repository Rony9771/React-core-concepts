// import logo from './logo.svg';
import './App.css';


function App() {
  const players =['Tamim', 'Bijoy', 'Shakib', 'Mushi', 'Liton']
  return (
    <div className="App">
      {
        players.map(player => <h1>{player}</h1>)
      }
      {
        players.map(player => <Person name = {player}></Person>)
      }

      <Person name="M.S Dhoni" Profession="Cricketer"></Person>
      <Person name="Shakib Al Hasan" Profession="Businessman"></Person>
        
     </div>  
  );
} 

function Person (props){
  console.log(props)
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>{props.Profession}</p>
    </div>
  )
}

        
        
        



export default App;
