// module.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function devide(a, b) {
    return b !== 0 ? a / b : 'Error';
}

export default function calculate(operation, a, b) {
    switch (operation) {
        case 'add': return add(a, b);
        case 'subtract': return subtract(a, b);
        case 'multiply': return multiply(a, b);
        case 'devide': return devide(a, b);
        default: return 'Error';
    }
}
