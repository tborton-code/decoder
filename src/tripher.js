const tripherModule = (function () {
    function tripher(input, encode = true) {
      if (!input || typeof input != "string")return false;
      if (encode && input.includes("|")) return false;
      if (encode){
        let arr1=[];
        let arr2=[];
        let arr3=[];
        for (let i=0;i<input.length;i++){
          arr1.push(input[i]);
          i++;
          if (i<input.length){
            arr2.push(input[i]);
            i++;
          }else{arr2.push("|")}
          if (i<input.length){
            arr3.push(input[i]);
          }else{arr3.push("|")}
        }const finalArr= arr1.concat(arr2,arr3);
        const result= finalArr.join("");
        return result;
      }
      if (!encode){
        let decodedArr =[];
        const incrementer=(input.length/3);
        for (let i=0;i<incrementer;i++){
          for (let j=i; j<input.length;j+=incrementer){
            if(input[j]!="|"){
              decodedArr.push(input[j])
            }
          }
        }
        const decodedString=decodedArr.join("");
        return decodedString;
      }
    }
    return {
      tripher,
    };
})();
  
  module.exports = { tripher: tripherModule.tripher };
  