function solve(steps, footprintLength, speed) {
    let distance = Number(steps) * Number(footprintLength);
    let breaksCount = Math.floor(distance / 500);
    let distanceInKm = distance / 1000;
    let timeForOneKM = 60 / speed;
    let totalTime = timeForOneKM * distanceInKm + breaksCount;
    let hours = Math.trunc(totalTime / 60);
    let minutes = Math.trunc(totalTime - hours * 60);
    let seconds = (totalTime - hours * 60 - minutes) * 60;
 
    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${Math.ceil(seconds).toString().padStart(2, '0') }`);
 
}
solve(4000, 0.60, 5)