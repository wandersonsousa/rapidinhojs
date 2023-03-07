import RapidinhoJs from "./Rapidinho.js";

const $root = document.getElementById("root");

RapidinhoJs.render(
  <div
    id="app-container"
    style="background:#ecf0f1;padding:64px;font-family:Arial;height:100%;margin-top:auto;margin-bottom:auto;"
  >
    <h1 style="color:#2ecc71;text-align:center;">Quick development with babel!</h1>
    <p style="color:#2ecc71;text-align:center;">
      This is a simple example of how to use the <code>Rapidinho</code> library.
    </p>
  </div>,
  $root
);
