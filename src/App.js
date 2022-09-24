// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
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
