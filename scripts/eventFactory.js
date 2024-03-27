import {RandomNumGen} from  "./randomNumGenerator.js";
import { topicIds,subTopicIds,toToggleForDeviceIds } from './config.js';
import { LoadQuestion } from './loadQuestion.js';
import { LoadDataExercise } from './loadDataExercise.js';
import { preparePanel,buildSMWExcercise,endSMWExcercise } from './memoryBuilder/preparePanel.js';
import{RandomNumSetGen} from './randomNumGenerator.js';
import {checkDevice} from "./checkDevice.js";

export function TopicToggle(event){
   
    let topicElements = document.getElementsByClassName("topic_cls");
    let anchrElem = event.target;
    let elemtId = anchrElem.id + '_topic';
   
    Array.from(topicElements).forEach(function(element) {
        if (window.getComputedStyle(element).display === "block") {
            element.style.display = "none";
        }
        
    });
    
    document.querySelectorAll('.nav-link').forEach(function (a) {
     // //debugger;
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
   ////debugger;
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
    let elemId= event.target.id;
    RandomNumSetGen(elemId);
  }

 export function ChangeQuestion(event){
   // //debugger;
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
    highlightSubExcercise(event);
    ToggleExercisePanel(event);
    ExcerciseSetup(event); 
    LoadDataExercise(event);

 }

 export function ChangeOperator(event){
    let slctId = event.target.id;
    let currOpId = slctId.replace('slct','op');
    
    let opVal =  document.getElementById(slctId).selectedOptions[0].innerText;
    document.getElementById(currOpId).innerHTML = opVal !='Select Operation' ? opVal : 'x';
 }

export function SetupSeeMemorizeWrite(){
 //debugger;
    if(preparePanel()){
        buildSMWExcercise();
    }
    
} 

export function EndSMWExercise(){
    endSMWExcercise();
}


export function toggleDevicePanel(){
    debugger;
    let deviceType = checkDevice();
      
    
        toToggleForDeviceIds.forEach(panel_Id => {
            debugger;
            let panelId = panel_Id;
            let  comp = document.getElementById(panelId);
            if(comp){
                comp.style.display = deviceType !='Mobile' ? 'block' : 'none';
            }
        });
 }