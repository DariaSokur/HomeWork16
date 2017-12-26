var glomerularFiltrationRate = function (male, raceBlack, age, creatinine) {
    this.male = male;
    this.raceBlack = raceBlack;
    this.age = age;
    this.creatinine = creatinine;
}

 var roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}

glomerularFiltrationRate.prototype.glomerularFiltration = function (male, raceBlack, age, creatinine) {
    if (male && raceBlack) {
        if (creatinine <= 0.7) {
            filtrationRate = 164 * Math.pow((creatinine / 0.9), (-0.411)) * Math.pow(0.993, age);
        }
        else {
            filtrationRate = 164 * Math.pow((creatinine / 0.9), (-1.209)) * Math.pow(0.993, age);
        }
        console.log(roundTwoDecimals(filtrationRate));
        return this;
    }
    else if (male && !raceBlack) {
        if (creatinine <= 0.7) {
            filtrationRate = 141 * Math.pow((creatinine / 0.9), (-0.411)) * Math.pow(0.993, age);
        }
        else {
            filtrationRate = 141 * Math.pow((creatinine / 0.9), (-1.209)) * Math.pow(0.993, age);
        }
        console.log(roundTwoDecimals(filtrationRate));
        return this;
    }
    else if (!male && raceBlack) {
        if (creatinine <= 0.7) {
            filtrationRate = 166 * Math.pow((creatinine / 0.7), (-0.329)) * Math.pow(0.993, age);
        }
        else {
            filtrationRate = 166 * Math.pow((creatinine / 0.7), (-1.209)) * Math.pow(0.993, age);
        }
        console.log(roundTwoDecimals(filtrationRate));
        return this;
    }
    else if (!male && !raceBlack) {
        if (creatinine <= 0.7) {
            filtrationRate = 144 * Math.pow((creatinine / 0.7), (-0.329)) * Math.pow(0.993, age);
        }
        else {
            filtrationRate = 144 * Math.pow((creatinine / 0.7), (-1.209)) * Math.pow(0.993, age);
        }
        console.log(roundTwoDecimals(filtrationRate));
        return this;
    }
}

module.exports = glomerularFiltrationRate;