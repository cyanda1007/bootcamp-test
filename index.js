var regNumbers = 'CY 345435, CJ 65456, CJ 43563456';
function firstPaarl (itemStrings){
    var RegNoArray= itemStrings.split(",");
    var array=[];
    for (var i=0;i<RegNoArray.length;i++){
        let currentList = RegNoArray[i].trim();
        if (currentList.includes("CJ")){
            array.push(currentList);
        }
    }
    return array;
    
}
console.log(firstPaarl(regNumbers))