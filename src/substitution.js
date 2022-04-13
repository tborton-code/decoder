// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26)return false;
    for (let i=0;i<alphabet.length;i++){
      for (let j=0;j<alphabet.length;j++){
        if (i!=j && alphabet[i]===alphabet[j]){return false};
      }
    }
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const substitutionAlphabet = alphabet.toLowerCase().split("");
    input = input.toLowerCase();
    let message = "";
    
    //ENCODE
    if (encode){
      for (let i=0; i<input.length; i++){
        if (!standardAlphabet.includes(input[i]) && substitutionAlphabet.includes(input[i]))return false;
        if (!standardAlphabet.includes(input[i]) && !substitutionAlphabet.includes(input[i])){message+=input[i]}
        else {
        const matching = (element)=> element === input[i];
        let index = standardAlphabet.findIndex(matching);
        message += substitutionAlphabet[index];
        }
    }}

    //DECODE
    if (encode===false){
      for (let i=0; i<input.length; i++){
        if (!standardAlphabet.includes(input[i]) && !substitutionAlphabet.includes(input[i])){message+=input[i]}
        else {
        const matching = (element)=> element === input[i];
        let index = substitutionAlphabet.findIndex(matching);
        message += standardAlphabet[index];
        }
    }}
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
