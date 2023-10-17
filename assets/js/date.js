export class dates {
  eightDaysInMilliseconds = 1209600000;
  // Milliseconds for the calculations
  MILLISECONDS_OF_A_SECOND = 1000;
  MILLISECONDS_OF_A_MINUTE = this.MILLISECONDS_OF_A_SECOND * 60;
  MILLISECONDS_OF_A_HOUR = this.MILLISECONDS_OF_A_MINUTE * 60;
  MILLISECONDS_OF_A_DAY = this.MILLISECONDS_OF_A_HOUR * 24;

  getLaunchingDate = () => new Date(Date.now() + this.eightDaysInMilliseconds);

  getDateNow = () => new Date();

  duration = (dateTarget) => dateTarget - this.getDateNow();

  remainingDays = (duration) =>
    Math.floor(duration / this.MILLISECONDS_OF_A_DAY);

  remainingHours = (duration) =>
    Math.floor(
      (duration % this.MILLISECONDS_OF_A_DAY) / this.MILLISECONDS_OF_A_HOUR
    );

  remainingMinutes = (duration) =>
    Math.floor(
      (duration % this.MILLISECONDS_OF_A_HOUR) / this.MILLISECONDS_OF_A_MINUTE
    );

  remainingSeconds = (duration) =>
    Math.floor(
      (duration % this.MILLISECONDS_OF_A_MINUTE) / this.MILLISECONDS_OF_A_SECOND
    );
}
