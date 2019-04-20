// a = [1, 2, 3]; 实现a.multiply = [1, 2, 3, 1, 4, 9];

const a = [1, 2, 3];
a.__proto__.multiply = () => {
    a.forEach(item => a.push(item * item));
};
a.multiply();
console.log(a);