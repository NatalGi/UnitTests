const calculateStylePoints = (styleNotes) => {
  if(!styleNotes || styleNotes.length !== 5) {
    return false;
  }

  const minNote = Math.min(...styleNotes);
  if(minNote < 0) {
    return false;
  }
  minIndex = styleNotes.findIndex(note => note === minNote);
  styleNotes[minIndex] = 0;

  const maxNote = Math.max(...styleNotes);
  maxIndex = styleNotes.findIndex(note => note === maxNote);
  styleNotes[maxIndex] = 0;

  return parseFloat(styleNotes.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0)).toFixed(1);
};

module.exports = calculateStylePoints;
