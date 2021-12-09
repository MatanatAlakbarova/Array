const numbers = [18, 33, 14, 40, 58, 4, 45, 2, 60, 13];
//-----------------------FilTer---------------------//
function filterNum(numbers, func) {
    const filteredNumbers = []
    for (let index = 0; index < numbers.length; index++) {
        if (func(numbers[index])) {
            filteredNumbers.push(numbers[index])
        }
    }
    return filteredNumbers
}
console.log(filterNum(numbers, a => a >= 18));
//-----------------------Find---------------------------//
function findNum(numbers, func) {
    for (let index = 0; index < numbers.length; index++) {
        if (func(numbers[index])) {
            return numbers[index]
        }
    }
}
console.log(findNum(numbers, a => a >= 18));





const ages = [18, 33, 14, 40, 58, 4, 45, 2, 60, 13];
minAge = 18;
//------------------------FILTER-2----------------------//
function filterAges(ages, minAge) {
    for (let index = 0; index < ages.length; index++) {
        if (ages[index] >= minAge) {
            document.querySelector("#demo1").innerHTML += "Filtered Age: " + ages[index] + "<br>";
        }
    }
};
filterAges(ages, minAge);
//--------------------------FIND-2----------------------//
function findAge(ages, minAge) {
    for (let index = 0; index < ages.length; index++) {
        if (ages[index] >= minAge) {
            document.querySelector("#demo2").innerHTML += "Finded Age: " + ages[index];
            break;
        }
    }
};
findAge(ages, minAge);
//-----------------------------EVERY-----------------------//
function everyAge(ages, minAge) {
    for (let index = 0; index < ages.length; index++) {
        if (ages[index] < minAge) {
            document.querySelector("#demo3").innerHTML = "False"
            break;
        }
        else {
            document.querySelector("#demo3").innerHTML = "True "
        }
    }
}
everyAge(ages, minAge);
//------------------------------SOME-------------------------//
function someAge(ages, minAge) {
    for (let index = 0; index < ages.length; index++) {
        if (ages[index] >= minAge) {
            document.querySelector("#demo4").innerHTML = "True"
            break;
        }
        else {
            document.querySelector("#demo4").innerHTML = "False"
        }
    }
}
someAge(ages, minAge);


