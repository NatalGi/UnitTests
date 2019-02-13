const calculateDistancePoints = (distance, hillSize, kPoint) => { //hillSize: 'medium', 'normal', 'large'
  if(typeof(distance) === 'undefined'
    || typeof(hillSize) === 'undefined'
    || typeof(kPoint) === 'undefined' 
    || distance < 0 || kPoint < 0) {
    return false;
  }

  let points = 0;
  let pointsForMeter = 0;

  if(hillSize === 'medium') {
    points = 60.0;
    pointsForMeter = 2.0;
  } else if(hillSize === 'normal') {
    points = 60.0;
    pointsForMeter = 1.8;
  } else if(hillSize === 'large') {
    points = 120.0;
    pointsForMeter = 1.2;
  } else {
    return false;
  }

  points += pointsForMeter * (distance - kPoint);
  return parseFloat(points).toFixed(1);
};

module.exports = calculateDistancePoints;
