import {RandomNumGen} from  "./randomNumGenerator.js";
import { topicIds,exerciseIds } from './config.js';
import { LoadDataExercise } from './loadDataExercise.js';

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
      debugger;
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

 export function ToggleExercise(event){
   
    let exerElements = document.getElementsByClassName("exercise_cls");
    let anchrElem = event.target;
   debugger;
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
   // debugger;
   let elemId= event.target.id;
   RandomNumGen(elemId);
   
    
 }

 export function ChangeQuestion(event){
    debugger;
    LoadDataExercise(event);
  }

 export function ActivateExercise(event){
    let elemId = event.target.id;
    
    exerciseIds.forEach(id => {
        const selector = `[id="${id}"]`; 
        const element = document.querySelector(selector);
        if (element) {
            element.classList.remove('exercise_bg');
        }
    });

    let elem = document.getElementById(elemId);
    elem.classList.add('exercise_bg');


 }


