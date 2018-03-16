export class Age {
  constructor() {
    this.now = new Date("03/16/2018");
    this.secondsPerYear = 31556925;
  }

  yearsToSeconds(years) {
    return years * this.secondsPerYear;
  }

  secondsToYears(seconds) {
    return seconds / this.secondsPerYear;
  }

  secondsBetweenDates(date1, date2) {
    return date2 / 1000 - date1 / 1000;
  }

  getYearsOnPlanet(planet, seconds) {
    let years = this.secondsToYears(seconds);
    switch (planet) {
    case 'mercury':
      return years / 0.24;
    case 'venus':
      return years / 0.62;
    case 'mars':
      return years / 1.88;
    case 'jupiter':
      return years / 11.86;
    default:
      return years;
    }
  }

  getAgeSeconds(birthday) {
    return this.secondsBetweenDates(new Date(birthday), this.now);
  }

  getExpectedRemainingSeconds(birthday, expectancy) {
    let oldAge = new Date(birthday);
    oldAge.setYear(oldAge.getFullYear() + expectancy);
    return this.secondsBetweenDates(this.now, oldAge);
  }
}
