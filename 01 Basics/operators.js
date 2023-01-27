let sellingPrice = 199;
let listPrice = 799;

let discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;
console.log("Discount percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

let result = listPrice > sellingPrice;

console.log(typeof result);
