import { PatienceSwitchToggle, TopicToggle,ChangeQuestion,subExerciseHandler,ChangeOperator,SetupSeeMemorizeWrite,SeeMemorizeWriteSetup,EndSMWExercise,toggleDevicePanel } from "./eventFactory.js";
import { topicIds,subTopicIds ,slctOprtionsIds,seeMemorizeWriteIds,patienceSwitchIds} from './config.js';

export function Intializer(){
   
 //  onDocumentLoad(); 
  
    onclickEventIntializer();
    inputIntializer();
    onChangeSelctOp();
    patienceSwitchChange()
    afterEveryThing();
 }

function onclickEventIntializer(){
    //debugger;
    topicIds.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener("click", TopicToggle);
        }
    });

    subTopicIds.forEach(function (id) {
        var element = document.getElementById(id);
       // //debugger;
        if (element) { 
            element.addEventListener("click", subExerciseHandler);
        }
    });
    //debugger;
    seeMemorizeWriteIds.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener("click", SeeMemorizeWriteSetup);
        }
    });
    let RAMStartBtn = document.getElementById('RAM_start_btn');
    let RAMEndBtn = document.getElementById('RAM_end_btn');
    if(RAMStartBtn) RAMStartBtn.addEventListener("click", SetupSeeMemorizeWrite);
    if(RAMEndBtn) RAMEndBtn.addEventListener("click", EndSMWExercise);
}

function inputIntializer(){
     
    // Exercise_your_answer_change started
    var elems = document.getElementsByClassName('answr_cls');
    Array.from(elems).forEach(function(element) {
            element.addEventListener("input", ChangeQuestion);
    });

 // Exercise_your_answer_change ended
}


function onChangeSelctOp(){

    slctOprtionsIds.forEach(function (id) {
        var element = document.getElementById(id);
       // //debugger;
        if (element) { 
            element.addEventListener("change", ChangeOperator);
        }
    });

}

function patienceSwitchChange(){
    debugger;
    patienceSwitchIds.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) { 
            element.addEventListener("change", PatienceSwitchToggle);
        }
    });
}

function afterEveryThing(){
   debugger;
  toggleDevicePanel();
}