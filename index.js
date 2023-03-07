const $root = document.getElementById("root");

const TEXT_ELEMENT = "TEXT ELEMENT";
const TEXT_ELEMENT_VALUE_PROP = "nodeValue";

function render(element, parentDom) {
  const { type, props } = element;

  // Create DOM element
  const isTextElement = type === TEXT_ELEMENT;
  const dom = isTextElement ? document.createTextNode(props[TEXT_ELEMENT_VALUE_PROP]) : document.createElement(type);

  // Add event listeners
  const isListener = (name) => name.startsWith("on");
  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

  // Add event listeners
  const isAttribute = (name) => !isListener(name) && name != "children";
  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name];
    });

  // Render children
  const childElements = props.children || [];
  childElements.forEach((childElement) => render(childElement, dom));

  // Append to parent
  parentDom.appendChild(dom);
}

// Starting with JSX
function createElement(type, config, ...args) {
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];
  props.children = rawChildren
    .filter((c) => c != null && c !== false)
    .map((c) => (c instanceof Object ? c : createTextElement(c)));
  return { type, props };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, { nodeValue: value });
}

render(
  createElement(
    "div",
    {
      style: "color: red;border:1px solid black;",
    },
    [createElement("h1", { innerText: "Text inside container" }), createTextElement("\nThis is a text element")]
  ),
  $root
);
