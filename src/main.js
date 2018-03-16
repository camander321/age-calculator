import { Age } from './../js/age.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var birthday = $('#birthday').val();
    var expectancy = $('#expectancy').val();
    var planet = $('#planet').val();

    var age = new Age(new Date());
    console.log(age.getYearsOnPlanet(birthday, planet));
  });
});
