import { Age } from './../js/age.js';

describe('Age', function() {

  let age;

  beforeEach(function() {
    age = new Age();
  });


  it('should take an age in years and convert to seconds', function() {
    expect(age.yearsToSeconds(24)).toEqual(757366224);
  });

  // it('should take 2 dates and return the differnece in seconds', function() {
  //   expect(project.progress).toEqual(0);
  // });
});
