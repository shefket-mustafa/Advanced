function timeToWalk(stepsTaken,footprint,speedKm){
    let distanceMeters= stepsTaken*footprint;
    let distanceKm=distanceMeters/1000;
    let walkingHours=distanceKm/speedKm;

    let breakMinutes= Math.floor(distanceMeters/500);
    let breakHours=breakMinutes/60;
    let totalHours= walkingHours + breakHours;
    
    let hours = Math.floor(totalHours);
    let totalMinutes = (totalHours - hours) * 60;
    let minutes = Math.floor(totalMinutes);
    let seconds = Math.round((totalMinutes - minutes) * 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}
timeToWalk(4000, 0.60, 5);