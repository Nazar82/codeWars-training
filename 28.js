// https://www.codewars.com/kata/fun-with-es6-classes-number-1-people-people-people/train/javascript

// Rather easy kata, but it was useful to recollect class syntax in ES6.

class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName() { return this.firstName + ' ' + this.lastName };
    static greetExtraTerrestrials(raceName) {
        return 'Welcome to Planet Earth ' + raceName;
    };
}
