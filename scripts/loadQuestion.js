import { getSharedArray,getArrIndx,setArrIndx } from './sharedData.js';
export function LoadQuestion(event){
//debugger;
    
    let inputElem = event.target;
    let elemId = inputElem.id;
    const sharedArray = getSharedArray();
    let currIndex = getArrIndx();
    let nxtQstn = sharedArray[currIndex];
    let slctdOpId =  event.target.id.replace("input","slct");

    let opVal =  document.getElementById(slctdOpId).selectedOptions[0].innerText;
  
   if(nxtQstn){
        let [firstNum,scndNum] =  nxtQstn.split(",");

        let nxtInd = currIndex + 1;
        //debugger;
        setArrIndx(nxtInd);
       
        let Q1Id= elemId.replace("input","Q1");
        let Q2Id= elemId.replace("input","Q2");
        
        let qstnElem1 = document.getElementById(Q1Id).innerHTML;
        let qstnElem2 = document.getElementById(Q2Id).innerHTML;

        let num1 =  parseInt(qstnElem1);
        let num2 = parseInt(qstnElem2);
        
        let coerrctAns = opVal == 'x' ? num1*num2 : ( opVal == '/' ? num1 / num2 : (opVal == '+' ? num1+num2 : ( opVal == '-' ? num1-num2 : num1*num2) ) );
        
        let userAns = parseInt(inputElem.value)

        if(coerrctAns== userAns){
          inputElem.value = '';
          document.getElementById(Q1Id).innerHTML = scndNum ;
          document.getElementById(Q2Id).innerHTML =firstNum ;
        }

       
        //debugger;
   } 
}