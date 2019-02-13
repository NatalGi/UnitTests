const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor = 0) => {
  if(typeof(distance) === 'undefined'
    || typeof(hillSize) === 'undefined'
    || typeof(kPoint) === 'undefined'
    || typeof(styleNotes) === 'undefined'
    || typeof(windFactor) === 'undefined'
    || distance < 0 || kPoint < 0) {
    return false;
  }
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  /*console.log('distancePoints: ' + distancePoints);
  console.log('stylePoints: ' + stylePoints);
  console.log('windFactor: ' + windFactor);
  console.log('gateFactor: ' + gateFactor);*/

  return Math.round((parseFloat(distancePoints) + parseFloat(stylePoints) + parseFloat(windFactor) + parseFloat(gateFactor))*10)/10;
}
//console.log(calculateTotalPoints(225.0, 'large', 200, [18.0, 18.5, 18.0, 18.0, 19.0], -9.9, 8.7));

module.exports = calculateTotalPoints;