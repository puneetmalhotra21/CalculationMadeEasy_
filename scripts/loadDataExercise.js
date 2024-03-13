import { getSharedArray,getArrIndx,setArrIndx } from './sharedData.js';

export function LoadDataExercise(event){
    debugger;
    let elemId = event.target.id;
    const sharedArray = getSharedArray();
    let currIndex = getArrIndx();
    let currQstn = sharedArray[currIndex];
    
   if(currQstn){
        let [firstNum,scndNum] =  currQstn.split(",");

        let nxtInd = currIndex + 1;
        //debugger;
        setArrIndx(nxtInd);
       
        let Q1Id= elemId.replace("input","Q1");
        let Q2Id= elemId.replace("input","Q2");
        document.getElementById(Q1Id).innerHTML = firstNum;
        document.getElementById(Q2Id).innerHTML = scndNum;
        //debugger;
   } 

}