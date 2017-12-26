var glomerularFiltrationRate = require('./glomerularFiltrationRate_module');

var male = true;
var raceBlack = false;
var age = 70;
var creatinine = 0.7;

var patient = new glomerularFiltrationRate(male, raceBlack, age, creatinine);
patient.glomerularFiltration(male, raceBlack, age, creatinine);
