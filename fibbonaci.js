function fibbonaciSequence(numToOutput) {
  let counter = 2;
  const sequence = [0, 1];
  while (counter < numToOutput) {
    counter++;
    const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNum);
    console.log(sequence);
  }
}

fibbonaciSequence(100);
