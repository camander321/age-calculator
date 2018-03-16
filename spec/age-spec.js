import { Age } from './../js/age.js';

describe('Age', function() {

  let age;

  beforeEach(function() {
    age = new Age();
  });


  it('should take an age in years and convert to seconds', function() {
    expect(age.yearsToSeconds(24)).toEqual(757366200);
    expect(age.secondsToYears(757366200)).toEqual(24);
  });

  it('should take 2 dates and return the difference in seconds', function() {
    expect(age.secondsBetweenDates(new Date("October 13, 2000"), new Date("October 14, 2000"))).toEqual(86400);
  });

  it('should get current age in seconds', function() {
    // cant test directly because age is always changing.
    expect( age.getAgeSeconds("05/05/1994")).toEqual(753062400);
  });

  it('should get expected remaining seconds in life', function() {
    expect( age.getExpectedRemainingSeconds("05/05/1994", 87)).toEqual(1992470400);
  });

  it('should take a date and a planet and return the number', function() {
    expect(age.getYearsOnPlanet('mars', 753062400)).toEqual(12.6934137715566);
  });

});
