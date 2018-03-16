export class Age {
  constructor(now) {
    this.now = now;
    this.secondsPerYear = 31556925;
  }

  yearsToSeconds(years) {
    return years * this.secondsPerYear;
  }

  secondsToYears(seconds) {
    return seconds / this.secondsPerYear;
  }

  secondsBetweenDates(date1, date2) {
    return date2.getTime() / 1000 - date1.getTime() / 1000;
  }

  getYearsOnPlanet(planet, seconds) {
    let years = this.secondsToYears(seconds);
    switch (planet) {
    case 'Mercury':
      return years / 0.24;
    case 'Venus':
      return years / 0.62;
    case 'Mars':
      return years / 1.88;
    case 'Jupiter':
      return years / 11.86;
    default:
      return years;
    }
  }

  getAgeSeconds(birthday) {
    return this.secondsBetweenDates(new Date(birthday), this.now);
  }

  getAgeOnPlanet(birthday, planet) {
    let age = this.getYearsOnPlanet(planet, this.getAgeSeconds(birthday));
    age = Math.floor(age * 100) / 100;
    return `Your age on ${planet} is ${age} years.`;
  }

  getExpectedRemainingSeconds(birthday, expectancy) {
    let oldAge = new Date(birthday);
    oldAge.setYear(oldAge.getFullYear() + expectancy);
    return this.secondsBetweenDates(this.now, oldAge);
  }

  getRemainingOnPlanet(birthday, expectancy, planet) {
    let remaining = this.getYearsOnPlanet(planet, this.getExpectedRemainingSeconds(birthday, expectancy));
    remaining = Math.floor(remaining * 100) / 100;
    return remaining >= 0 ?
      `You will probably live for another ${remaining} years!` :
      `You have surpassed your life expectancy by ${-remaining} years! Good Job!` ;
  }
}
