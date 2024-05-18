const processArray = (arr) => {
    return arr.map( newArr => {
      if(newArr % 2 === 0){
        return newArr ** 2;}
        else{
            return newArr * 3;
            
        } 
      }  
    )}

    const formatArrayStrings = (stringArray, numberArray) => {
        return stringArray.map((str, index) => {
            if(numberArray[index] % 2 === 0){
               str.toUpperCase();
          }else{
             str.toLowerCase();
          }
        });
    }
