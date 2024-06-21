import React from 'react'
import getPokeTheme from '../util/getPokeTheme';

const PokeCard = ({ item }) => {
  return (
    <div key={item.id} style={{ "--color": getPokeTheme(item.types[0].type.name) }} className="card">
      <div className="left">
        <div className="image">
          <img src={item.imageUrl} alt={item.name} />
        </div>
      </div>
      <div className="right">
        <h3 className="name">{item.name}</h3>
        <div className="pokemon-detail-wrapper">
          <div className="pokemon-detail-wrap">
            <div className="pokemon-detail">
              <img src="./assets/weight.svg" alt="weight" />
              <p className="body3-fonts weight">{item.weight}kg</p>
            </div>
          </div>
          <div className="pokemon-detail-wrap">
            <div className="pokemon-detail">
              <img src="./assets/height.svg" alt="height" className="straighten" />
              <p className="body3-fonts height">{item.height}m</p>
            </div>
          </div>
        </div>
        <div className="stats-wrapper">
          <div className="stats-wrap" data-stat="hp">
            <div className="stat">
              <p className="body3-fonts stats">HP</p>
              <p className="body3-fonts">{item.stats[0].base_stat}</p>
            </div>
            <div className="progress-bar">
              <div style={{ width: `${item.stats[0].base_stat}%` }} className="progress"></div>
            </div>
          </div>
          <div className="stats-wrap" data-stat="ATK">
            <div className="stat">
              <p className="body3-fonts stats">ATK</p>
              <p className="body3-fonts">{item.stats[1].base_stat}</p>
            </div>
            <div className="progress-bar">
              <div style={{ width: `${item.stats[1].base_stat}%` }} className="progress"></div>
            </div>
          </div>
          <div className="stats-wrap" data-stat="DEF">
            <div className="stat">
              <p className="body3-fonts stats">DEF</p>
              <p className="body3-fonts">{item.stats[2].base_stat}</p>
            </div>
            <div className="progress-bar">
              <div style={{ width: `${item.stats[2].base_stat}%` }} className="progress"></div>
            </div>
          </div>
          <div className="stats-wrap" data-stat="SATK">
            <div className="stat">
              <p className="body3-fonts stats">SATK</p>
              <p className="body3-fonts">{item.stats[3].base_stat}</p>
            </div>
            <div className="progress-bar">
              <div style={{ width: `${item.stats[3].base_stat}%` }} className="progress"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="types">
        {item.types.map((types, index) => (
          <div key={index} className='type' >
            <span class="tooltip-text">{types.type.name}</span>
            <img src={`/assets/types/Pokemon_Type_Icon_${types.type.name}.png`} alt={types.type.name} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default PokeCard