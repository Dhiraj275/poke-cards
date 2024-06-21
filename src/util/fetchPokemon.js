const fetchPokeList = (limit) => {
    return new Promise(async resolve => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        const data = await response.json();
        const allPokemons = data.results;
        resolve(allPokemons);
    })
}
const fetchPokeDetail = (url) => {
    return new Promise(async resolve => {
        const response = await fetch(url)
        const data = await response.json()
        resolve(data);
    })
}
const fetchPokemon = (limit) => {
    return new Promise(async resolve => {
        const pokeList = await fetchPokeList(limit);
        const pokemons = [];

        await Promise.all(pokeList.map(async (item) => {
            const details = await fetchPokeDetail(item.url);
            const { name, id, types, weight, height, abilities, stats } = details;
            pokemons.push({ name, id, types, weight, height, abilities, stats, imageUrl: `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` });
        }));
        pokemons.sort((a,b)=>a.id-b.id)
        resolve(pokemons)
    })
};


export default fetchPokemon