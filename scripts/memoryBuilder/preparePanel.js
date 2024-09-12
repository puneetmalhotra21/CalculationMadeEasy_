import {getSharedArray_MB } from '../sharedData.js';
let currRAMInterval=null;
export function preparePanel(){
  // debugger;
    togglePanel('start');
    loadChallenge();
    
  }
 
  export function buildSMWExcercise(){
    
    
  }

  export function endSMWExcercise(){
    clearInterval(currRAMInterval);
    togglePanel('end');
  }


  function togglePanel(start_end){
    //debugger;
    if(start_end == 'start'){
      document.getElementById('RAM_start_Panel').style.display = 'none';
      document.getElementById('SMW_digit_selection').style.display = 'none';
      document.getElementById('RAM_challenge_Panel').style.display = 'block';

    }else{
      document.getElementById('RAM_start_Panel').style.display = 'block';
      document.getElementById('SMW_digit_selection').style.display = 'block';
      document.getElementById('RAM_challenge_Panel').style.display = 'none';
    }
  }

  function loadChallenge(){
   const numSetArray = getSharedArray_MB();
   debugger;
   let randomNumElem =  document.getElementById('RAM_random_num');
   let count = 0;
   let cycle=0;

   if(randomNumElem){
        if(cycle == 0){
            randomNumElem.innerText = numSetArray[0];
        } 

        currRAMInterval=  setInterval(function() {
          debugger;
                                  cycle++;
                                  if(cycle == 10){
                                      clearInterval(currRAMInterval);
                                      return;
                                  } 
                                
                                  if((count < numSetArray.length) && cycle%2==0){
                                      count++;
                                      debugger;
                                      randomNumElem.innerText = numSetArray[count];
                                  }else{
                                     randomNumElem.innerText ='';
                                  }
           
                          }, 3000);
   }
   
  }