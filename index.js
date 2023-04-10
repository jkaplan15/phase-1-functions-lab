// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue)
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
    
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    const distanceFare = distanceTravelledInFeet(start, destination)
    if (distanceFare < 400) {
        return 0;
    } else if (distanceFare > 400 && distanceFare < 2000) {
        return (distanceFare-400) * 0.02
    } else if (distanceFare > 2000 && distanceFare < 2500) {
        return 25;
    } else if (distanceFare > 2500) {
        return 'cannot travel that far'
    }
}