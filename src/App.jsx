import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PokeList from './components/PokeList';
import fetchPokemon from './util/fetchPokemon';
const limit = 80
function App() {
  const [pokemons, setPokemons] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPokemons, setFilteredPokemons] = useState(null)
  const [currentLimit, setCurrentLimit] = useState(limit)
  useEffect(() => {
    async function loadData() {
      setPokemons(await fetchPokemon(limit))
      setFilteredPokemons(await fetchPokemon(limit))
    }
    loadData()
  }, [])

  async function loadMore() {
    const ball = document.getElementById("spin-ball")
    ball.classList.add("spin")
    setCurrentLimit(currentLimit + limit)

    setPokemons(await fetchPokemon(currentLimit + limit))
    setFilteredPokemons(await fetchPokemon(currentLimit + limit))

    ball.classList.remove("spin")
  }
  const search = (query) => {
    setSearchQuery(query);
    if (query !== "") {
      const list = [...pokemons]

      setFilteredPokemons(list.filter(item => item.name.toLowerCase().includes(query.toLowerCase())))
    }
    else {
      setFilteredPokemons(pokemons)
    }
  }
  return (
    <main className="main">
      <Navbar searchQuery={searchQuery} search={search} />
      <section className="pokemon-list">
        <div className="container">
          <div className="list-wrapper">
            {
              filteredPokemons?.length>0 && <div className="bg-items">
                <img src="/assets/pokeball-red.svg" className='ball-1' alt="pokeball-red" />
                <img src="/assets/pokeball-red.svg" className='ball-2' alt="pokeball-red" />
              </div>
            }
            <PokeList list={filteredPokemons} />
          </div>
        </div>
        <div className="load-more">
          <button className="load-btn" style={{ visibility: searchQuery===""?"visible":"hidden" }} onClick={loadMore}>
            <img id="spin-ball" src="/assets/pokeball.svg" alt="ball" /> Load More
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
