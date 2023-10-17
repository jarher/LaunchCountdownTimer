export class animateElement {
  rotateOut(element) {
    element.style.transform = "rotateX(90deg)";
    setTimeout(() => element.remove(), 250);
  }
  rotateIn(element, DOM) {
    setTimeout(() => {
      element.style.transform = "rotateX(0deg)";
    }, 250);
    setTimeout(() => DOM.deleteFromDOM(element.previousSibling), 350);
  }
}
