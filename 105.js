var words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
let a = [];
let char;
for (let i = 0; i < words.length; i++)
{
    char = words[i][0];
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
    {
        a.push(words[i]);
    }
}
console.log(a);