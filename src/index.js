console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const cardHolder = document.querySelector(".cards");

function addPokemons() {
  data.forEach((pokemon) => {
    const li = document.createElement("li");
    li.setAttribute("class", "card");

    const h2Element = document.createElement("h2");
    h2Element.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1, pokemon.name.length)
    h2Element.classList.add("card--title")

    const imgElement = document.createElement("img");
    imgElement.width = "256"
    imgElement.classList.add("card--img")
    imgElement.src = pokemon.sprites.front_default

    const statsHolder = document.createElement("li")
    statsHolder.classList.add("card--text")
    pokemon.stats.forEach( (stat) => {
        const statLi = document.createElement("li")
        statLi.innerText = stat.stat.name.toUpperCase() + ": " + stat.base_stat
        statsHolder.appendChild(statLi)
    })

    li.appendChild(h2Element)
    li.appendChild(imgElement)
    li.appendChild(statsHolder)

    cardHolder.appendChild(li);
  });
}

addPokemons();
