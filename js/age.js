export class Age {
  yearsToSeconds(years) {
    return years * 31556926;
  }

  secondsToYears(seconds) {
    return seconds / 31556926;
  }

  secondsBetweenDates(date1, date2) {
    return (date2 - date1) / 1000;
  }
}
