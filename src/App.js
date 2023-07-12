import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import {useState} from 'react'

function App() {

  const [pokemon, setPokemon] = useState([])

  const getPokemons = () => {

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => res.json())
        .then(data =>
          {
            console.log(data)
            setPokemon(data.results)
          }

        )
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="App">
      <button onClick={getPokemons}>Fetch</button>

      <Post pokemon={pokemon}/>

    </div>

  );
}

export default App;
