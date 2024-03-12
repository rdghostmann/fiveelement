const generateSequence = (increment, start) => {
  
  let sequence = [];
  for (let i = start; i <= 90; i += increment) {
    sequence.push(i);
    if (i === 90 ) {
      for (let j = 1; j <= start; j += increment) {
        sequence.push(j);
      }
      break;
    }
    if (i >= 80 && i >= 83 && i >= 89 ) {
      for (let k = 1; k <= start; k += increment) {
        sequence.push(k);
      }
      break;
    }
 
  }
  return sequence;
  }

  export default generateSequence;





  