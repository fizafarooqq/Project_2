const inputEl = document.getElementById('search-input');
const inputButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const pokemonImage = document.getElementById('sprite');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const spattack = document.getElementById('special-attack');
const spdefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

function getPokemonInfo(data) {
  const { name, id, weight, height, types, sprites, stats } = data;
  console.log(data); // Log the data to see the structure

  pokemonName.innerText = name;
  pokemonId.innerText = '#' + id;
  pokemonWeight.innerText = 'Weight: ' + weight;
  pokemonHeight.innerText = 'Height: ' + height;
  pokemonTypes.innerHTML = types.map(type => <span class="${type.type.name.toLowerCase()}">${type.type.name.toUpperCase()}</span>).join(" ");

  if (sprites && sprites.front_default) {
    pokemonImage.src = sprites.front_default;
  } else {
    pokemonImage.src = ''; // Set to an empty string or a placeholder image if not found
  }

  stats.forEach(stat => {
    switch(stat.stat.name) {
      case 'hp':
        hp.innerText = stat.base_stat;
        break;
      case 'attack':
        attack.innerText = stat.base_stat;
        break;
      case 'defense':
        defense.innerText = stat.base_stat;
        break;
      case 'special-attack':
        spattack.innerText = stat.base_stat;
        break;
      case 'special-defense':
        spdefense.innerText = stat.base_stat;
        break;
      case 'speed':
        speed.innerText = stat.base_stat;
        break;
    }
  });
}

const fetchData = async () => {
  if (inputEl.value === "") {
    return;
  }
  try {
    const res = await fetch(https //pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputEl.value.toLowerCase()}
        );
    const data = await res.json();
    console.log(data);
    getPokemonInfo(data);
  } catch (err) {
    alert('Pokémon not found');
    console.error(err); // Log the error for debugging
  }
};

inputButton.addEventListener('click', fetchData);