const findTheOldest = function(arrayPeople) {

    arrayAges = arrayPeople.map((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return person.yearOfDeath - person.yearOfBirth;
    })

    let maxIndex = arrayAges.indexOf(Math.max(...arrayAges));
    return arrayPeople[maxIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
