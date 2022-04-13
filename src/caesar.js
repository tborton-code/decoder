// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


//a = 97, z = 122

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25){return false};
    //if decoding, change shift to negative shift, undoing the encode
    if (!encode){shift=shift*-1}
    //ENCODE / DECODE
    const lwrCaseInput = input.toLowerCase();
    let finalArr =[];
    for (let i=0; i<lwrCaseInput.length; i++){
      let charCode=lwrCaseInput.charCodeAt(i);
      if (charCode <97 || charCode >122){finalArr[i]= String.fromCharCode(charCode);
      } else {
        charCode = charCode+shift;
        if (charCode <97){
        //if 96, should be 122
          const difference = 97-charCode;
          charCode = 123-difference;
      }
        if (charCode >122){
        //if 123, should be 97
          const difference = charCode-122;
          charCode = 96+difference;
      }
        finalArr[i]= String.fromCharCode(charCode);
      }
    }
    const results = finalArr.join("");
    return results;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
