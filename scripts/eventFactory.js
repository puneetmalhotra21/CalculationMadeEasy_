import {RandomNumGen} from  "./randomNumGenerator.js";
import { globalVars } from './sharedData.js';
import { topicIds, subTopicIds, toToggleForDeviceIds,patienceSwitchIds } from './config.js';
import { LoadQuestion } from './loadQuestion.js';
import { LoadDataExercise } from './loadDataExercise.js';
import { preparePanel,buildSMWExcercise,endSMWExcercise } from './memoryBuilder/preparePanel.js';
import{RandomNumSetGen} from './randomNumGenerator.js';
import {checkDevice} from "./checkDevice.js";

let currentInterval = globalVars.currentInterval;
let currPanelId ='';
export function TopicToggle(event){
    debugger;
   
    let topicElements = document.getElementsByClassName("topic_cls");
    let anchrElem = event.target;
    let elemtId = anchrElem.id + '_topic';
   
    Array.from(topicElements).forEach(function(element) {
        if (window.getComputedStyle(element).display === "block") {
            element.style.display = "none";
        }
        
    });
    
    document.querySelectorAll('.nav-link').forEach(function (a) {
     // ////debugger
        if(topicIds.includes(a.id)){
        a.classList.remove('active');
       } 
    });

    anchrElem.classList.add('active');

    if(anchrElem.id=="exercise"){
        document.getElementById("exercise_sub").style.display="block";
        
    }else{
        document.getElementById("exercise_sub").style.display="none";
    }   
    
    let elem = document.getElementById(elemtId);

    if(elem) elem.style.display="block";

 }

 export function ToggleExercisePanel(event){
   
    let exerElements = document.getElementsByClassName("exercise_cls");
    let anchrElem = event.target;
   //////debugger
    let elemtId = anchrElem.id + '_container';
   
    Array.from(exerElements).forEach(function(element) {
        if (window.getComputedStyle(element).display === "block") {
            element.style.display = "none";
        }
        
    });
    
    let elem = document.getElementById(elemtId);

    if(elem) elem.style.display="block";

 }

 export function ExcerciseSetup(event){
   let elemId= event.target.id;
   RandomNumGen(elemId);
 }

 export function SeeMemorizeWriteSetup(event){
     ////debugger
    let elemId= event.target.id;
    RandomNumSetGen(elemId);
  }

 export function ChangeQuestion(event){
   // ////debugger
    LoadQuestion(event);
  }

  function highlightSubExcercise(event){
    let elemId = event.target.id;
    
    subTopicIds.forEach(id => {
        const selector = `[id="${id}"]`; 
        const element = document.querySelector(selector);
        if (element) {
            element.classList.remove('exercise_bg');
        }
    });

    let elem = document.getElementById(elemId);
    elem.classList.add('exercise_bg');


 }

 export function subExerciseHandler(event){
    
    debugger;   
    currPanelId = event.target.id.split('_sub');
    if (currentInterval) {
        debugger;
        resetCounter(currentInterval);
            document.getElementById(event.target.id+'_countdwnNum').innerHTML = 10;
    }
    console.log('event.target.id::'+event.target.id);
    let disp =   document.getElementById(event.target.id+'_countrPanel').style.display;
    debugger;
    document.getElementById(event.target.id+'_patience_switch').checked = disp !='none' ? true: false;

    highlightSubExcercise(event);
    ToggleExercisePanel(event);
    ExcerciseSetup(event); 
    LoadDataExercise(event);

 }

 export function ChangeOperator(event){
    debugger
    if(currentInterval)clearInterval(currentInterval);  
    let slctId = event.target.id;
    let selctdOp = event.target.selectedOptions[0].innerText;
    let idstr='';
    idstr= slctId.includes('_slct') ? slctId.split('_slct')[0]+'_countdwnNum' : '';
    let currOpId = slctId.replace('slct','op');
    
    let opVal =  document.getElementById(slctId).selectedOptions[0].innerText;
    document.getElementById(currOpId).innerHTML = opVal !='Select Operation' ? opVal : 'x';
   // if(idstr!='' && selctdOp !='Select Operation' ) startCounter(10,idstr); 
 }

export function SetupSeeMemorizeWrite(){
 ////debugger
    if(preparePanel()){
        buildSMWExcercise();
    }
    
} 

export function EndSMWExercise(){
    endSMWExcercise();
}

export function StartCheckHandler(event){

    let panelType='';
    let startId = event.target.id;
    let checkVal = false;
    let selctOptId = '';
    let slctElem = null;
    let slctVal ='';
    let countrid='';
    let patienceid = '';
    let countrElem = null;
    let countrPanelId = '';
    let countrPanelElem = null;
    let patieneElem = null;

        panelType = currPanelId = startId.split('_start')[0];
        selctOptId = panelType + '_slct';
        checkVal =  event.target.checked;
        slctElem = document.getElementById(selctOptId);
        slctVal = slctElem!=null ? slctElem.value : '';
        countrid = panelType + '_countdwnNum';
        countrPanelId  = panelType + '_countrPanel';
        debugger;
        patienceid =  panelType + '_patience_switch';
        countrElem = document.getElementById(countrid);
        patieneElem = document.getElementById(patienceid);
        countrPanelElem = document.getElementById(countrPanelId);

        if(slctVal=='Select Operation'){
            alert('Select Operation First') ;
            document.getElementById('single_x_single_start').checked = false;
            return;
        }
        debugger;
        if(countrElem !=null && slctElem!=null && patieneElem!=null && countrPanelElem!=null ){
            if(!checkVal){
                if (currentInterval) {
                    resetCounter(currentInterval);
                    countrElem.innerHTML = 10;
                    countrPanelElem.style.display=  'none';
                    slctElem.disabled = false;
                    patieneElem.disabled = false;
                }
            }else{
                    startCounter(10,countrid);
                    countrPanelElem.style.display = 'block';
                    slctElem.disabled = true;
                    patieneElem.disabled = true;
            }
        }
       
}

export function toggleDevicePanel(){
    //debugger
    let deviceType = checkDevice();
    
        toToggleForDeviceIds.forEach(panel_Id => {
            //debugger
            let panelId = panel_Id;
            let  comp = document.getElementById(panelId);
            if(comp){
                comp.style.display = deviceType !='Mobile' ? 'block' : 'none';
            }
        });
 }


 function startCounter(secs,idstr){
    debugger
    if (currentInterval) {
        resetCounter(currentInterval);
    }
    let count = secs;
    let counterElem =   document.getElementById(idstr);
    counterElem.style.color ='Black';
    //count = counterElem.innerHTML = secs -1;
    currentInterval =    setInterval(function() {
        //debugger
        if (count == 0) {   
                resetCounter(currentInterval);
                let countdwnElem = document.getElementById(currPanelId+'_countdwnNum');
                document.getElementById(currPanelId+'_start').checked = false;
                document.getElementById(currPanelId+'_startlabel').innerHTML = 'Start Again';
                document.getElementById(currPanelId+'_patience_switch').disabled = false;
                document.getElementById(currPanelId+'_slct').disabled = false; 
                countdwnElem.innerHTML = 'End';
                countdwnElem.style.color = 'Red';
                return;
        }
       
        if(counterElem!=undefined && counterElem!=null){
            counterElem.innerHTML= count;
        }
       
          count--;
      }, 1000);
   
 } 

 export function PatienceSwitchToggle(event){
    debugger;
   let checkid =  event.target.id;
   let checkVal = event.target.checked;
   if( checkid.includes('_patience_switch')){
        let panelType = checkid.split('_patience_switch')[0];
       // let countrid= panelType + '_countrPanel';
        let startId= panelType + '_countstart';
        let countstartElem = document.getElementById(startId);
        
        if(countstartElem){
            countstartElem.style.display= checkVal ? 'block' : 'none';
        }

   } 
 }

  function resetCounter(currentInterval){
    clearInterval(currentInterval);
  } 


  