var animalSoundMap = {
    sheep: 'baa',
    cat: 'meow',
    cow: 'moo',
    fox: 'ring-ding-ding-ding-ding-ring-ding'
    };
    function getAnimalSound(animal) { var sound = animalSoundMap[animal];
    if (sound) { return sound;
    }
    // We assume that animals without an explicit sound, make a 'woof' sound
    return 'woof'; }
    var result = getAnimalSound('elephant');
    console.log(result);