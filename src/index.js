const cardHolder = document.querySelector(".cards");

function addPokemons() {
  data.forEach((pokemon) => {
    let i = 0;
    const li = document.createElement("li");
    li.setAttribute("class", "card");

    const h2Element = document.createElement("h2");
    h2Element.innerText =
      pokemon.name.charAt(0).toUpperCase() +
      pokemon.name.substring(1, pokemon.name.length);
    h2Element.classList.add("card--title");

    const imgElement = document.createElement("img");
    imgElement.width = "256";
    imgElement.classList.add("card--img");
    imgElement.src = pokemon.sprites.other["official-artwork"].front_default;

    const imgSliderNextBtn = document.createElement("button");
    imgSliderNextBtn.innerText = "Next image";
    imgSliderNextBtn.addEventListener("click", function (li) {
      ++i;
      while (
        Object.values(pokemon.sprites)[
          (i % Object.values(pokemon.sprites).length) - 1
        ] === null ||
        Object.values(pokemon.sprites)[
          (i % Object.values(pokemon.sprites).length) - 1
        ] === undefined ||
        Object.values(pokemon.sprites)[
          (i % Object.values(pokemon.sprites).length) - 1
        ] === undefined
      ) {
        ++i;
      }
      const currentSprite = Object.values(pokemon.sprites)[
        (i % Object.values(pokemon.sprites).length) - 1
      ];
      imgElement.src = currentSprite;
    });

    const statsHolder = document.createElement("ul");
    statsHolder.classList.add("card--text");
    pokemon.stats.forEach((stat) => {
      const statLi = document.createElement("li");
      statLi.innerText = stat.stat.name.toUpperCase() + ": " + stat.base_stat;
      statsHolder.appendChild(statLi);
    });

    const appearedInText = document.createElement("h4");
    appearedInText.innerText = "Games this pokemon has appeared in:";

    const appearedInList = document.createElement("ul");
    pokemon.game_indices.forEach((game) => {
      const appearInListItem = document.createElement("li");
      appearInListItem.innerText = game.version.name;
      appearedInList.appendChild(appearInListItem);
    });

    li.appendChild(imgSliderNextBtn);
    li.appendChild(h2Element);
    li.appendChild(imgElement);
    li.appendChild(statsHolder);
    li.appendChild(appearedInText);
    li.appendChild(appearedInList);

    cardHolder.appendChild(li);
  });
}

function nextImg(element) {}

addPokemons();
