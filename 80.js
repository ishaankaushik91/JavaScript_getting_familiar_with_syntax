let itemsForSale = [
    { name: 'cheese', price: 3 },
    { name: 'tv', price: 300 },
    { name: 'socks', price: 2 },
    { name: 'soft toy', price: 7 },
    { name: 'fridge', price: 120 }
];

function formatPrice(item)
{
    item.price = '£' + item.price + '0.0';
    return item;
}

let formattedItems = itemsForSale.map(formatPrice);
let result = formattedItems[2].price;
console.log(result);