import SimpleReact from "./SimpleReact.js";

const $root = document.getElementById("root");

SimpleReact.render(
  <div id="name">
    <h1>Hello, world with Babel!</h1>
    <div style="border:1px solid #3498db;background:#ecf0f1;">
      <p>This is a paragraph</p>
    </div>
    <h2 style="color:#e74c3c;"></h2>
  </div>,
  $root
);
