import App from "./app";

const pi = 3.141;

const add = (...params) => {
    let sum = 0;
    for (let i of params) {
        sum += i;
    }
    return sum;
}

const sub = (...params) => {
    let diff = 0;
    for (let i of params) {
        diff -= i;
    }
    return diff;
}

const mul = (...params) => {
    let sum = 1;
    for (let i of params) {
        sum *= i;
    }
    return sum;
}

export { pi, add, sub, mul };
export default App;