export class manipulateDom {
  createElement({ type, attr, children }, value) {
    const newElement = document.createElement(type);
    newElement.className = attr;
    if (children) {
      const newChildren = document.createElement(children);
      newChildren.textContent = value;
      newElement.append(newChildren);
    }
    return newElement;
  }
  prependToParent = (parent, children) => parent.prepend(children);
  
  appendToParent = (parent, children) => parent.append(children);

  deleteFromDOM = (element) => element.remove();
}
