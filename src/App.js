// import logo from './logo.svg';
import './App.css';

const heros = [
  {name:'Salman Khan', age: 52 , salary:'100cr'},
  {name:'Sharukh Khan', age: 50 , salary:'10cr'}
]


function App() {
  const players =['Tamim', 'Bijoy', 'Shakib', 'Mushi', 'Liton']
  return (
    <div className="App">
      {
        players.map(player => <h1>{player}</h1>)
      }
      {/* {
        players.map(player => <Person name = {player}></Person>)
      } */}
      {
        heros.map(hero => <Person name={hero.name} age={hero.age}></Person>)
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
      <p>{props.age}</p>
      <p>{props.Profession}</p>
      

    </div>
  )
}

        
        
        



export default App;
