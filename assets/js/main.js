import { dates } from "./date.js";
import { ElementDOM } from "./read-DOM.js";
import { manipulateDom } from "./manipulate-DOM.js";
import { timer } from "./timer.js";
import { animateElement } from "./animation.js";

const date = new dates();
const DOM = new manipulateDom();
const element = new ElementDOM();
const animate = new animateElement();
const template = {
  type: "div",
  attr: "timer-digit",
  children: "span",
};

const newTimer = new timer({ date, DOM, element, animate, template });

newTimer.runTimer();


