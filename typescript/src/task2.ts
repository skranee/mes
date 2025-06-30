type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

interface User {
    name: string;
    age: number;
}

const partialUser: MyPartial<User> = {};

function alwaysThrow(): never {
    throw new Error("Эта функция всегда выбрасывает ошибку");
}

function recursiveNever() {
    return recursiveNever();
}
