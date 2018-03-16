import { Age } from './../js/age.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../img/bg.jpeg';
import './styles.css';


$(document).ready(function() {
  $('#button').click(function() {

    var birthday = $('#birthday').val();
    var expectancy = parseInt($('#expectancy').val());
    var planet = $('#planet').val();

    var age = new Age(new Date());
    $("#output").text('');
    $("#output").append(`<h4>${age.getAgeOnPlanet(birthday, planet)}</h4>`);
    $("#output").append(`<h4>${age.getRemainingOnPlanet(birthday, expectancy, planet)}</h4>`);
  });
});
