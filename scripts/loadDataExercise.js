import { getSharedArray,getArrIndx,setArrIndx } from './sharedData.js';

export function LoadDataExercise(event){
    ////debugger;
    let elemId = event.target.id;
    const sharedArray = getSharedArray();
    let currIndex = getArrIndx();
    let currQstn = sharedArray[currIndex];
   
    let QPanelId  = elemId + "_panel" ;
    let ansInpId = elemId + "_input";
    let opVal = elemId.split('_')[1];

    document.getElementById(QPanelId).style.display = "block"; 
    document.getElementById(ansInpId).style.display = "block"; 
   // document.getElementById(elemId).style.display = "none"; 
   if(currQstn){
        let [firstNum,scndNum] =  currQstn.split(",");

        let nxtInd = currIndex + 1;
        ////debugger;
        setArrIndx(nxtInd);
       
        let Q1Id= elemId + "_Q1";
        let Q2Id= elemId + "_Q2";
        let Opid = elemId + "_op";

        document.getElementById(Opid).innerHTML =opVal;
        document.getElementById(Q1Id).innerHTML = firstNum;
        document.getElementById(Q2Id).innerHTML = scndNum;
        ////debugger;
   } 

}