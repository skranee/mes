class Person {
    constructor(private name: string) {}

    get nameValue(): string {
        return this.name;
    }

    set nameValue(newName: string) {
        this.name = newName;
    }
}

const man = new Person("Alice");
console.log(man.nameValue); // "Alice"
man.nameValue = "Bob";
console.log(man.nameValue); // "Bob"