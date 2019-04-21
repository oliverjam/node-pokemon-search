import template from "./html";
import fetch from "../fetch";

const html = String.raw;

export default async ({ url }) => {
  const { name } = url.query;
  const pokemon = name
    ? await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    : "";
  return template`
    <form action="/search" method="GET">
      <div
        id="autocomplete"
        class="autocomplete"
        role="combobox"
        aria-autocomplete="list"
        aria-controls="suggestions"
        aria-expanded="false"
      >
        <label for="searchInput">
          Pokemon
          <input
            id="searchInput"
            class="searchInput"
            name="q"
            autocomplete="off"
          />
        </label>
        <ul role="listbox" id="suggestions" class="suggestions" hidden></ul>
        ${
          pokemon
            ? html`
                <figure>
                  <img src="${pokemon.sprites.front_default}" />
                  <figcaption>
                    ${"#" + pokemon.id + " " + pokemon.name}
                  </figcaption>
                </figure>
              `
            : ""
        }
      </div>
    </form>
  `;
};
