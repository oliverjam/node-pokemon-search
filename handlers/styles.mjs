const css = String.raw;

export default () => css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    display: grid;
    place-items: center;
    padding-top: 6rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    color: hsl(220, 10%, 20%);
    background-color: hsl(220, 10%, 96%);
  }

  /* reset stupid input defaults */
  input {
    display: block;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    border: 0;
    background: none;
  }

  label {
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .autocomplete {
    position: relative;
  }

  .searchInput {
    width: 26ch;
    margin-top: 0.5rem;
    border-radius: 0.125rem;
    padding: 0.5rem;
    box-shadow: 0 2px 2px hsla(220, 10%, 40%, 0.2),
      0 4px 8px hsla(220, 10%, 40%, 0.1);
    background-color: #fff;
  }

  .searchInput:focus {
    outline: none;
    box-shadow: 0 2px 4px hsla(220, 10%, 40%, 0.4),
      0 6px 20px hsla(220, 10%, 40%, 0.3);
  }

  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 1rem;
    border-radius: 0.125rem;
    box-shadow: 0 2px 4px hsla(220, 10%, 40%, 0.4),
      0 6px 20px hsla(220, 10%, 40%, 0.3);
    background-color: #fff;
  }

  .suggestions > li {
    padding: 0.5rem;
    transition: 0.1s background-color ease-out;
  }

  .suggestions > li.current {
    background-color: hsl(220, 20%, 94%);
  }
`;
