//Rick & Morty API
const endpoint = 'https://rickandmortyapi.com/api/character';
const app = document.getElementById("app");

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const characters = data.results;

    characters.map(character => {
      const characterElement = document.createElement('div')
      
      characterElement.innerHTML = `
        <h2>${character.name}</h2>
        <h4>${character.status}</h4>
        <h4>${character.species}</h4>
        <h4>${character.gender}</h4>
        <h2>${character.origin.name}</h2>
        <img src="${character.image}" alt="${character.name}">
      `
      
      app.appendChild(characterElement);
    }) 
  })
  .catch((error) => {
    console.log(error)
  })