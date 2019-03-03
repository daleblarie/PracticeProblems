const words = ["test", "stet"];

function anagramChecker(word1, word2) {
  test1 = {};
  test2 = {};
  for (var i = 0; i < word1.length; i++) {
    if (word1.charAt(i) in test1){
      test1[word1.charAt(i)] += 1;
      console.log(test1);
    } else {
      test1[word1.charAt(i)] = 1;
      console.log(test1);
    }
  }
  for (var i = 0; i < word2.length; i++) {
    if (word2.charAt(i) in test2){
      test2[word2.charAt(i)] += 1;
      console.log(test2);
    } else {
      test2[word2.charAt(i)] = 1;
      console.log(test2);

    }
  }
  let flag = true;
  Object.entries(test1).forEach(([key, value]) => {
    if (!(test1[key] == test2[key])) {
      flag = false;
    }
  }
);
return flag;

};
console.log(anagramChecker(words[0], words[1]));
