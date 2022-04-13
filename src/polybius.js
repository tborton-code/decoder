// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const checkProperInput = input.replace(" ","").length % 2;
    if (encode === false && checkProperInput == 1)return false;  

    //ENCODE
    if (encode){
      const lwrCaseInput= input.toLowerCase();
      let outputArr=[];
      for (let i=0; i<lwrCaseInput.length; i++){
        switch (lwrCaseInput[i]){
          case "a":outputArr.push("11")
          break;
          case "b":outputArr.push("21")
          break;
          case "c":outputArr.push("31")
          break;
          case "d":outputArr.push("41")
          break;
          case "e":outputArr.push("51")
          break;
          case "f":outputArr.push("12")
          break;
          case "g":outputArr.push("22")
          break;
          case "h":outputArr.push("32")
          break;
          case "i":outputArr.push("42")
          break;
          case "j":outputArr.push("42")
          break;
          case "k":outputArr.push("52")
          break;
          case "l":outputArr.push("13")
          break;
          case "m":outputArr.push("23")
          break;
          case "n":outputArr.push("33")
          break;
          case "o":outputArr.push("43")
          break;
          case "p":outputArr.push("53")
          break;
          case "q":outputArr.push("14")
          break;
          case "r":outputArr.push("24")
          break;
          case "s":outputArr.push("34")
          break;
          case "t":outputArr.push("44")
          break;
          case "u":outputArr.push("54")
          break;
          case "v":outputArr.push("15")
          break;
          case "w":outputArr.push("25")
          break;
          case "x":outputArr.push("35")
          break;
          case "y":outputArr.push("45")
          break;
          case "z":outputArr.push("55")
          break;
          default:
            outputArr.push(lwrCaseInput[i])
        }
      }
      const result = outputArr.join("")
      return result;
    }

    //DECODE  
    if (!encode){
    let outputArr=[];
    for (let i=0; i<input.length;i++){
    if (input[i]===" "){
      outputArr.push(" ")
    }else{
    switch (input.slice(i,i+2)){
      case "11": outputArr.push("a");
        i+=1;
        break;
      case "21": outputArr.push("b");
        i+=1;
        break;
      case "31": outputArr.push("c");
        i+=1;
        break;
      case "41": outputArr.push("d");
        i+=1;
        break;
      case "51": outputArr.push("e");
        i+=1;
        break;
      case "12": outputArr.push("f");
        i+=1;
        break;
      case "22": outputArr.push("g");
        i+=1;
        break;
      case "32": outputArr.push("h");
        i+=1;
        break;
      case "42": outputArr.push("i/j");
        i+=1;
        break;
      case "52": outputArr.push("k");
        i+=1;
        break;
      case "13": outputArr.push("l");
        i+=1;
        break;
      case "23": outputArr.push("m");
        i+=1;
        break;
      case "33": outputArr.push("n");
        i+=1;
        break;
      case "43": outputArr.push("o");
        i+=1;
        break;
      case "53": outputArr.push("p");
        i+=1;
        break;
      case "14": outputArr.push("q");
        i+=1;
        break;
      case "24": outputArr.push("r");
        i+=1;
        break;
      case "34": outputArr.push("s");
        i+=1;
        break;
      case "44": outputArr.push("t");
        i+=1;
        break;
      case "54": outputArr.push("u");
        i+=1;
        break;
      case "15": outputArr.push("v");
        i+=1;
        break;
      case "25": outputArr.push("w");
        i+=1;
        break;
      case "35": outputArr.push("x");
        i+=1;
        break;
      case "45": outputArr.push("y");
        i+=1;
        break;
      case "55": outputArr.push("z");
        i+=1;
        break;
      default:
        console.log("Hopefully we're not seeing this") 
    }
    }
  }
  const result = outputArr.join("");
  return result
}}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
