function getInitials(sentence)
{
    let words = sentence.toLowerCase().split(' ');
    let initials = words.map(function(word)
    {
        return word.charAt(0);
    });
    return initials.join('');
}

let result = getInitials('Fly me to the moon');
console.log(result);