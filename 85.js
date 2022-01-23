function isNotADuck(quacksLikeADuck, walksLikeADuck) {
    return !(quacksLikeADuck && walksLikeADuck); }
    var result = isNotADuck(true, false);
    console.log(result);