function fromWhere(city){
    if(city.includes("CY")){
      return "Bellville"
    } if(city.includes("CJ")){
      return "Paarl"
    }if(city.includes("CA")){
      return "Cape Town"
    }if(city.includes("CC")){
      return "Some other place!"
  }
  }
  console.log(fromWhere("CY"));
  console.log(fromWhere("CJ"));
  console.log(fromWhere("CA"));
  console.log(fromWhere("CC"));