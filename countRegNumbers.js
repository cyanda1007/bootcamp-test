function countRegNumber (regCount){
    var regCount2 = regCount.split(",");
    return regCount2.length;
  }

  console.log(countRegNumber('CA 182736,CY 523519,CT 812328'));
console.log(countRegNumber('CA 182736'));