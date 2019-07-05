import template from "./html";

export default ({ message }) => template`
  <h1>⚠️ ${message}</h1>
`;
