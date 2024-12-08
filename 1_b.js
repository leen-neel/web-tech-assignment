function processInput(input) {
  let words = input.trim().split(" ");

  let lastWord = words.pop();

  let abbreviation = words.map((word) => word[0].toLowerCase()).join("");

  return `${lastWord} ${abbreviation}`;
}

let input = "very very special laxman";
let result = processInput(input);
console.log(result);
