import React, {useState, useEffect} from 'react';
import Header from './components/header'
import Characters from './components/characters';
import Search from './components/search';


function App() {
      const [actors, setActors] = useState([]);
  const [load, setLoad] = useState(true);
  const [query, setQuery] = useState('')

      useEffect(() => {
        fetchCharacters();
      }, [query]);

      const fetchCharacters = async () => {
        fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            let few = data.slice(5, 30)
            setActors(few);
            setLoad(false);
            // console.log(actors)
          })
          .catch((err) => console.log(err));
      };

  const chek = (q) => {
    setQuery(q)
  }
  return (
      <div className="App">
      <Header />
      <Search query={chek}/>
      <Characters actors={actors} load={load}/>
      </div>
  );
}

export default App;
