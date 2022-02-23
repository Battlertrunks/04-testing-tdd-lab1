"use strict";

const translate = (word) => {
  let words = word.split(" ");
  // if the word with a vowel ... do the stuff
  words = words.map((eachWord) => {
    if (
      /([@#$%^&*_+\-=\[\]{}"\\|<>\/?~])/g.test(word) ||
      /([0-9])$/g.test(word)
    ) {
      return word;
    }
    eachWord = eachWord.split("");

    if (/^[aeiouAEIOU]/gi.test(eachWord[0])) eachWord.push("way");
    else
      eachWord.push(
        eachWord.splice(0, eachWord.findIndex(findVowel)).join(""),
        "ay"
      );

    wordWithContractions(word, eachWord);
    return eachWord.join("");
  });

  return words.join(" ");
};

const findVowel = (copyWord) => {
  return copyWord.match(/^[aeiouAEIOU]/gi);
};

const wordWithContractions = (word, copyWord) => {
  let indexContractionsDeleting = copyWord.indexOf("'");
  if (indexContractionsDeleting >= 0) {
    copyWord.splice(indexContractionsDeleting, 1);
    let indexContractions = word.indexOf("'");
    copyWord.splice(indexContractions, 0, "'");
  }
  return copyWord;
};

module.exports = translate;
