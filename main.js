import './style.css'
document.getElementById('app').innerHTML = `<h1 class="title">Rick & Morty App</h1>
<section id="character-container" class="container"></section>`
//Rick & Morty API
const endpoint = 'https://rickandmortyapi.com/api/character';

//ASYNC - AWAIT
const getCharacters = async() => {
  try {
    const response = await fetch(endpoint)
    const data = await response.json()
    const characters = data.results
    const container = document.getElementById('character-container')

    characters.map(character => {
      container.innerHTML += `
        <div class="card">
          <h2 class="card-title">${character.name}</h2>
          <img src="${character.image}" alt="${character.name}" class="card-image">
          <p class="card-species"><span>Species: </span>${character.species}</p>
          <p class="card-status"><span>Status: </span>${character.status}</p>
          <p class="card-origin"><span>Origin: </span>${character.origin.name}</p>
        </div>
      `
    })

  } catch (error) {
    console.log(error)
  }
  
}

getCharacters()