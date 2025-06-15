class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    showInfo () {
        console.log(`Name: ${this.name}; Age: ${this.age}; Country: ${this.country}`);
    }
}

const alex = new Person('Alex', 20, 'USA'); // Name: Alex; Age: 20; Country: USA
const pavel = new Person('Pavel', 19, 'Belarus'); // Name: Pavel; Age: 19; Country: Belarus

alex.showInfo();
pavel.showInfo();
