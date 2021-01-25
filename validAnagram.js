const anagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const frequencyOne = {};
  const frequencyTwo = {};

  for (let char of s1) {
    frequencyOne[char.toLowerCase()] = ++frequencyOne[char.toLowerCase()] || 1;
  }

  for (let char of s2) {
    frequencyTwo[char.toLowerCase()] =
      (frequencyTwo[char.toLowerCase()] || 0) + 1;
  }

  for (let char in frequencyOne) {
    if (!(char in frequencyTwo)) {
      return false;
    }

    if (frequencyOne[char] !== frequencyTwo[char]) {
      return false;
    }
  }

  return true;
};

anagram("aZa", "aaz");
