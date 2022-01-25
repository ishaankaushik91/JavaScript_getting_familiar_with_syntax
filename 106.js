var words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
var results = [];

words.forEach((elem) => {
    console.log(elem[0].toUpperCase() + elem.slice(1).join(''));
});