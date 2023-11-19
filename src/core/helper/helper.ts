const createElement = (type: any, props: any, ...children: any) => {
  if (typeof type === "function") {
    return type(props, ...children);
  }
  return {
    type,
    props: {
      ...props,
      children: children.map((child: any) => {
        if (typeof child === "object") {
          return child;
        }
        return createTextElement(child);
      }),
    },
  };
};

const createTextElement = (text: string) => {
  return {
    type: "TEXT_NODE",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const createElementForRender = (element) => {
  const { type, props } = element;
  // Create a dom node based on type of element
  const domElement: any =
    type === "TEXT_NODE"
      ? document.createTextNode("")
      : document.createElement(type);

  const isChild = (key: string) => key !== "children";
  const isStyle = (key: string) => key === "style";
  const isFunction = (key: string) => key.startsWith("on");

  if (props) {
    // Assign props to element
    Object.keys(props)
      .filter(isChild)
      .forEach((name) => (domElement[name] = props[name]));

    // Assign styles to an element
    Object.keys(props)
      .filter(isStyle)
      .forEach((name) => Object.assign(domElement.style, props[name]));

    // Assign events to an element
    Object.keys(props)
      .filter(isFunction)
      .forEach((name) => (domElement[name.toLowerCase()] = props[name]));

    // Create children nodes
    if (props?.children && props?.children.length > 0) {
      props.children.forEach((child: any) => {
        if (Array.isArray(child)) {
          child.map((item) => render(item, domElement));
        } else {
          render(child, domElement);
        }
      });
    }
  }

  return domElement;
};

const render = (element: HTMLElement, root: HTMLElement) => {
  const domElement = createElementForRender(element);

  // clear existing elements
  const main = document.getElementById("root");
  main.innerHTML = "";

  root.appendChild(domElement);
};

export { createElement, render };
