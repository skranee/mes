interface Car {
    brand: string;
    model: string;
    year: number;
}

interface BrandOnly {
    brand: string;
}

function getCar(vehicle: Car | BrandOnly): string {
    if ('model' in vehicle) {
        return `Полная информация: ${vehicle.brand} ${vehicle.model}, ${vehicle.year} год`;
    } else {
        return `Только марка: ${vehicle.brand}`;
    }
}

const fullCar: Car = { brand: 'Toyota', model: 'Camry', year: 2020 };
const brandOnly: BrandOnly = { brand: 'BMW' };

console.log(getCar(fullCar));    // "Полная информация: Toyota Camry, 2020 год"
console.log(getCar(brandOnly));  // "Только марка: BMW"