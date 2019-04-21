import styles from "./styles";
const html = String.raw;

export default (content, ...vars) => {
  const doc = content.map((str, i) => str + (vars[i] || "")).join("");
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>
          ${styles()}
        </style>
      </head>
      <body>
        ${doc}
      </body>
    </html>
  `.trim();
};
