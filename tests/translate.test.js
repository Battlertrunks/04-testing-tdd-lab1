"use strict";
const translate = require("../src/translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    expect(translate("apple")).toBe("appleway");
  });
  test("word that starts with a vowel", () => {
    expect(translate("else")).toBe("elseway");
  });
  test("word that starts with a vowel", () => {
    expect(translate("alanta")).toBe("alantaway");
  });
  test("word that starts with a vowel", () => {
    expect(translate("always")).toBe("alwaysway");
  });
  test("word that starts with a vowel", () => {
    expect(translate("amulet")).toBe("amuletway");
  });

  test("word that starts with a consonant", () => {
    expect(translate("happy")).toBe("appyhay");
  });
  test("word that starts with more than one consonant", () => {
    expect(translate("duck")).toBe("uckday");
  });

  test("word that starts with a consonant", () => {
    expect(translate("smile")).toBe("ilesmay");
  });

  test("word that starts with a consonant", () => {
    expect(translate("string")).toBe("ingstray");
  });

  test("word that starts with a consonant", () => {
    expect(translate("TRaSh")).toBe("aShTRay");
  });

  test("word that starts with a consonant", () => {
    expect(translate("dog.")).toBe("og.day");
  });

  // Words with numbers or symbols
  test("word that starts with a consonant", () => {
    expect(translate("hello@grandcircus.co")).toBe("hello@grandcircus.co");
  });
  test("word that starts with a consonant", () => {
    expect(translate("212")).toBe("212");
  });

  // Contractions words
  test("word that starts with a consonant", () => {
    expect(translate("can't")).toBe("ant'cay");
  });
  test("word that starts with a consonant", () => {
    expect(translate("You're")).toBe("our'eYay");
  });
  test("word that starts with a consonant", () => {
    expect(translate("d'iet")).toBe("ietd'ay");
  });

  // Multiple words
  test("word that starts with a consonant", () => {
    expect(translate("apple today")).toBe("appleway odaytay");
  });
  test("word that starts with a consonant", () => {
    expect(translate("smile glove")).toBe("ilesmay oveglay");
  });
});
