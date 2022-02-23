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

// const translate = (word) => {
//   word = word.toLowerCase();
//   const vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) return word + "way";
//   else {
//     const index = word.split("").findIndex((letter) => vowels.includes(letter));
//     console.log(index);
//     return word.slice(index) + word.slice(0, index) + "ay";
//   }
// };

module.exports = translate;
