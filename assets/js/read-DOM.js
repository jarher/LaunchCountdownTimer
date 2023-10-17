export class ElementDOM {
  
  getFromParent = (parent, className) => Array.from(parent.querySelectorAll(className));

  getElement = (className) => document.querySelector(className);

  getManyElements = (className) => Array.from(document.querySelectorAll(className));
}
