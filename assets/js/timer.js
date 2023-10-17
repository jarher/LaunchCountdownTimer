export class timer {
  //===
  // VARIABLES
  //===
  DATE_TARGET;
  date;
  timerData;
  DOM;
  template;
  element;
  animate;

  initialSeconds = 0;
  initialMinutes = 0;
  initialHours = 0;
  intialDays = 0;

  observerOptions = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: false,
    attributeOldValue: false,
    characterDataOldValue: false,
  };

  constructor({ date, DOM, element, animate, template }) {
    this.DATE_TARGET = date.getLaunchingDate();
    this.date = date;
    this.DOM = DOM;
    this.template = template;
    this.element = element;
    this.animate = animate;
    this.initialData();
  }

  observer1 = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        this.animate.rotateOut(mutation.nextSibling);
      }
    });
  });

  observer2 = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        this.animate.rotateIn(mutation.addedNodes[0], this.DOM);
      }
    });
  });
  // any change in DOM is registered for add animation effect
  registerMutacion([firstIndex, secondIndex]) {
    this.observer1.observe(
      this.element.getManyElements(".timer-card")[firstIndex],
      this.observerOptions
    );
    this.observer2.observe(
      this.element.getManyElements(".timer-card")[secondIndex],
      this.observerOptions
    );
  }

  DateRender(type, value, arr) {
    if (type === "initial") {
      arr.forEach((index) =>
        this.DOM.appendToParent(
          this.element.getManyElements(".timer-card")[index],
          this.DOM.createElement(this.template, this.formatTime(value))
        )
      );
    }
    if (type === "initTimer") {
      this.DOM.prependToParent(
        this.element.getManyElements(".timer-card")[arr[0]],
        this.DOM.createElement(this.template, this.formatTime(value))
      );

      this.DOM.appendToParent(
        this.element.getManyElements(".timer-card")[arr[1]],
        this.DOM.createElement(this.template, this.formatTime(value))
      );
    }
  }

  formatTime = (value) => (value < 10 ? `0${value}` : value);

  showSeconds = (type, seconds) => {
    const indices = [6, 7];
    this.DateRender(type, seconds, indices);
    this.registerMutacion(indices);
    this.initialSeconds = seconds;
  };

  showMinutes = (type, minutes) => {
    const indices = [4, 5];
    this.DateRender(type, minutes, indices);
    this.registerMutacion(indices);
    this.initialMinutes = minutes;
  };

  showHours = (type, hours) => {
    const indices = [2, 3];
    this.DateRender(type, hours, indices);
    this.registerMutacion(indices);
    this.initialHours = hours;
  };

  showDays = (type, days) => {
    const indices = [1, 0];
    this.DateRender(type, days, indices);
    this.registerMutacion(indices);
    this.initialDays = days;
  };

  initialData() {
    this.showSeconds(
      "initial",
      this.date.remainingSeconds(this.date.duration(this.DATE_TARGET))
    );

    this.showMinutes(
      "initial",
      this.date.remainingMinutes(this.date.duration(this.DATE_TARGET))
    );
    this.showHours(
      "initial",
      this.date.remainingHours(this.date.duration(this.DATE_TARGET))
    );
    this.showDays(
      "initial",
      this.date.remainingDays(this.date.duration(this.DATE_TARGET))
    );
  }

  updateCountdown() {
    const currentSeconds = this.date.remainingSeconds(
      this.date.duration(this.DATE_TARGET)
    );
    const currentMinutes = this.date.remainingMinutes(
      this.date.duration(this.DATE_TARGET)
    );
    const currentHours = this.date.remainingHours(
      this.date.duration(this.DATE_TARGET)
    );
    const currentDays = this.date.remainingDays(
      this.date.duration(this.DATE_TARGET)
    );

    if (this.initialSeconds !== currentSeconds)
      this.showSeconds("initTimer", currentSeconds);

    if (this.initialMinutes !== currentMinutes)
      this.showMinutes("initTimer", currentMinutes);

    if (this.initialHours !== currentHours)
      this.showHours("initTimer", currentHours);

    if (this.initialDays !== currentDays) this.showDays("initTimer", currentDays);
  }

  runTimer() {
    setInterval(() => this.updateCountdown(), 1000);
  }
}
