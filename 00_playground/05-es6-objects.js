// Object property shorthand
console.log(`
-------------//  Object property shorthand
`);
const name = 'Khaled';
const age = 35;
const location = 'Saudi Arabia';

const user = {
    name,
    age,
    location,
};

console.log(user);

// Object destructuring
console.log(`
-------------// Object destructuring
`);
const product = {
    label: 'Notebook',
    price: 1.99,
    stock: 200,
    dicount: undefined
};

const { label: product_label, price, stock, dicount, rating, available = false } = product;

console.log('product_label is: ', product_label);
console.log('price is: ', price);
console.log('stock is: ', stock);
console.log('dicount is: ', dicount);
console.log('rating is: ', rating);
console.log('available is: ', available);