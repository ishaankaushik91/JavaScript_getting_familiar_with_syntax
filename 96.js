function getVectorMagnitude(x, y) {
    // Magnitude of a vector is defined by // M^2 = x^2 + y^2
    var magnitudeSquared = x * x + y * y; 
    return Math.sqrt(magnitudeSquared);
    }
    var result = getVectorMagnitude(3, 4);
    console.log(result);