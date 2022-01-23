var itemsForSale = {
    cheese: { price: {
    normal: 3,
    reduced: 1.5 }
    }, tv: {
    price: { normal: 300, reduced: 150
    } }
    };
    function getNormalPrice(item) {
    return itemsForSale[item].price.normal;
    }
    var result = getNormalPrice('cheese');
    console.log(result);