function sortArray<T>(arr: T[]): T[] {
    return [...arr].sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
}

type StringOrNumber<T extends boolean> = T extends true ? string : number;

type TypeWhenTrue = StringOrNumber<true>;    // string
type TypeWhenFalse = StringOrNumber<false>; // number

function getObjectKeys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const keys = getObjectKeys(person); // Тип: ("name" | "age" | "city")[]
console.log(keys); // ["name", "age", "city"]
