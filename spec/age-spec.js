import { Age } from './../js/age.js';

describe('Age', function() {

  let age;

  beforeEach(function() {
    age = new Age();
  });


  it('should take an age in years and convert to seconds', function() {
    expect(age.yearsToSeconds(24)).toEqual(757366224);
    expect(age.secondsToYears(757366224)).toEqual(24);
  });

  it('should take 2 dates and return the difference in seconds', function() {
    expect(age.secondsBetweenDates(new Date("October 13, 2000"), new Date("October 13, 2024"))).toEqual(757382400);
  });
});
