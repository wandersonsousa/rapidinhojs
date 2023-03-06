const $root = document.getElementById("root");

function render(element, parentDom) {
  const { type, props } = element;
  const dom = document.createElement(type);

  const isListener = (name) => name.startsWith("on");
  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

  const isAttribute = (name) => !isListener(name) && name != "children";
  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name];
    });

  const childElements = props.children || [];
  childElements.forEach((childElement) => render(childElement, dom));
  parentDom.appendChild(dom);
}

render(
  {
    type: "h1",
    props: {
      innerText: "Hello, world!",
    },
  },
  $root
);
