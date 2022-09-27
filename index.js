// code your solution here
function superbowlWin(record){
    const found = record.find(log => {
        if(log.result === "W"){
            return log;
        }
    }) 
    if(found){
        return found.year;
      }else{
        return found
      }
  }
