import {getSharedArray_MB } from '../sharedData.js';

export function preparePanel(){
   debugger;
    togglePanel('start');
    loadChallenge();
    
  }
 
  export function buildSMWExcercise(){
    
    
  }

  export function endSMWExcercise(){

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
    debugger;
   const numSetArray = getSharedArray_MB();
   document.getElementById('RAM_random_num').innerText = numSetArray[0];
   debugger;
  }