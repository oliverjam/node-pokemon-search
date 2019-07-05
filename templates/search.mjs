import template from "./html";
import POKEMON from "../pokemon";

const html = String.raw;

export default ({ url }) => {
  const results = POKEMON.filter(name =>
    name.includes(url.query.q.toLowerCase())
  );
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
            value="${url.query.q}"
            autofocus
          />
        </label>
        <ul role="listbox" id="suggestions" class="suggestions">
          ${
            results.length
              ? results
                  .map(
                    result =>
                      html`
                        <li><a href="/?name=${result}">${result}</a></li>
                      `
                  )
                  .join("\n")
              : html`
                  <li>Sorry, no results</li>
                `
          }
        </ul>
      </div>
    </form>
  `;
};
