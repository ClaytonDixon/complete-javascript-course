/*
var firstName = 'John ';


var lastName = 'Smith '
var is = 'is '
var age = 28;

var fullAge = true;

var job;

job = 'Teacher'
console.log(job);


console.log(firstName + lastName + is + age);

*/

/* Variable mutation and type coercion*/

/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' is ' + age)

*/ /*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearMark);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
console.log(typeof x);
*/
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 var isFullAge = now -yearJohn >= fullAge;

 console.log(isFullAge);

 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2 ;
 console.log(average);

 var x, y;

 x = y = (3+5) * 4 -6; // 8 * 4 -6
 */
/*
var markHeight, johnHeight, markMass, johnMass, markBmi,
johnBmi;

 markHeight = 3;
 johnHeight = 4;

 markMass = 150;
 johnMass = 200;

 markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);
 console.log(markBmi, johnBmi);

 bmiComparison = markBmi > johnBmi;
 console.log(markBmi > johnBmi);

 console.log("Is Mark's BMI higher then John's? " + bmiComparison);
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + 
        ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + 
        ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var markHeight, johnHeight, markMass, johnMass, markBmi,
johnBmi;

 markHeight = 3;
 johnHeight = 4;

 markMass = 150;
 johnMass = 200;

 markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);
 

if (markBmi > johnBmi)  {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/
 //bmiComparison = markBmi > johnBmi;
 //console.log(markBmi > johnBmi);

//console.log("Is Mark's BMI higher then John's? " + bmiComparison);


/*

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <20) { 

    console.log(firstName + ' is a teenager.');
} else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}

else {
    console.log(firstName + ' is a man.');
}
*/
/*
var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer.') 
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice'
}
*/
/*
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
           
    }

    var age = 45;
    switch (true) {
        case age < 13: 
            console.log(firstName + ' is a boy.');
            break;
        case age >= 13 && age <20:
            console.log(firstName + ' is a teenager.');
            break;
        case age >= 20 && age <30:
            console.log(firstName + ' is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');       
        }

*/
/*
var johnAverage, mikeAverage, maryAverage;

johnAverage = (100+120+105) / 3;
mikeAverage = (100+120+105) /3;
maryAverage = (100+120+105) /3;
console.log();

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('Johns team wins on average with an average score of ' +johnAverage);
} else if (johnAverage < mikeAverage && mikeAverage > maryAverage) {
    console.log('Mikes team wins on average with an average score of ' +mikeAverage);
} else if (johnAverage < mikeAverage && mikeAverage < maryAverage){
    console.log('Marys team wins on average with an average score of ' +maryAverage);
} else if(johnAverage = mikeAverage && mikeAverage == maryAverage) {
    console.log('Its a draw!!');
}
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);


function yearsUntilRetirement(year,firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
    
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1948,'Mike');
yearsUntilRetirement(1969,'Jane');
*/
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'))
*/

/*
function calculateTip(bill,tipPercentage) {
    return bill * tipPercentage;
}
var tipPercentage1 = .15;
var tipPercentage2 = .2;
var tipPercentage3 = .1;

var billAmount1 = 124
var billAmount2 = 48
var billAmount3 = 268
var tipAmount1 = calculateTip(billAmount1, tipPercentage1);
var tipAmount2 = calculateTip(billAmount2, tipPercentage2);
var tipAmount3 = calculateTip(billAmount3, tipPercentage3);
console.log('The amount John should tip for the first bill is ' + tipAmount1);
console.log('The amount John should tip for the second bill is ' + tipAmount2);
console.log('The amount John should tip for the third bill is ' + tipAmount3);

function calculateTotal(bill, tipAmount) {
    return bill + tipAmount;
}

var totalAmount1 = calculateTotal(billAmount1, tipAmount1);
var totalAmount2 = calculateTotal(billAmount2, tipAmount2);
var totalAmount3 = calculateTotal(billAmount3, tipAmount3);
console.log('The total amount of the first bill is '+ totalAmount1);
console.log('The total amount of the second bill is '+ totalAmount2);
console.log('The total amount of the third bill is ' + totalAmount3);

var allTips = [tipAmount1, tipAmount2, tipAmount3];
var allTotals = [totalAmount1, totalAmount2, totalAmount3];

console.log('The three tip amounts are ' + allTips);
console.log('The three total amounts are ' + allTotals);
*/

/*

var john = {
    fullName: 'John Smith' ,
    mass: 110 ,
    height: 1.95 ,
    calcBMI: function() {

        this.BMI = this.mass / (this.height*this.height);
    return this.BMI;    
    }
};

john.calcBMI();
console.log(john);

var mark = {
    fullName: 'Mark Davis',
    mass: 78,
    height:1.69 ,
    calcBMI: function() {

        this.BMI = this.mass / (this.height*this.height);

    return this.BMI;    
    }
};
mark.calcBMI();
console.log(mark);

var x = john.BMI
var y = mark.BMI


if (x > y) {
        console.log(john.fullName + ' has a higher BMI with a BMI of ' + john.BMI);        
} else if (x < y) {
        console.log(mark.fullName +  ' has a higher BMI with a BMI of ' + mark.BMI);
} else {
        console.log('John and Mark have the same BMI');
    };

    */

//for (var i = 1; i <= 20; i+=2) {
//    console.log(i);
//}
/*
var john = ['John', 'Smith', 1990, 'designer', false];


for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
//These two are the same
var i = 0;

while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/
// continue and break statements


/*
var john = ['John', 'Smith', 1990, 'designer', false,'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards

for (var i = john.length -1; i >= 0; i--) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}*/
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) 
        {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if(bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
        
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 5, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) 
        {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if(bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
        
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


john.calcTips();
mark.calcTips();


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);   } else {
        console.log(mark.fullName + '\'s family pays higher tips with an average of $' + mark.average);
    }
    */
   