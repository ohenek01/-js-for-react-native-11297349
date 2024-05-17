const processArray = (arr) => {
    return arr.map( newArr => {
      if(newArr % 2 === 0){
        return newArr ** 2;}
        else{
            return newArr * 3;
            
        } 
      }  
    )}