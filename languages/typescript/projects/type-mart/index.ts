import products from "./products";

const productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = 'New York, 454, Broadway';

const product = products.filter(product => {
  return product.name === productName;
})[0];
 
if (product.preOrder) {
  console.log('We will send you a message when your product is on its way.');
}

if (product.price >= 25) {
    shipping = 0;
    console.log('You have Free Shipping! It costs ${shipping}');
  
} else {
    shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(product.name);
console.log(shippingAddress);
console.log(product.price);
console.log(taxTotal);
console.log(total);

//Another way of doing this would be
console.log(`
Product: ${productName}
etc...
`
);



