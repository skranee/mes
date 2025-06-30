function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Неподдерживаемые типы аргументов');
}

console.log(combine(5, 3));       // 8
console.log(combine('Hello', 'World')); // 'HelloWorld'
// console.log(combine(1, 'test')); // Ошибка: Неподдерживаемые типы аргументов