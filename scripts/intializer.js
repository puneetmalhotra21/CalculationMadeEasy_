import { TopicToggle,ToggleExercise,ExcerciseSetup,ActivateExercise,ChangeQuestion } from "./eventFactory.js";
import { topicIds,exerciseIds } from './config.js';
import { LoadDataExercise } from './loadDataExercise.js';

export function Intializer(){
   
    onclickEventIntializer();
  
 }

function onclickEventIntializer(){

    topicIds.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener("click", TopicToggle);
        }
    });

    exerciseIds.forEach(function (id) {
        var element = document.getElementById(id);
       // debugger;
        if (element) { 
            element.addEventListener("click", ExcerciseSetup);
            element.addEventListener("click", ActivateExercise);
            element.addEventListener("click", ToggleExercise);
        }
    });

    var startBtn = document.getElementById('start_btn');
    startBtn.addEventListener("click", LoadDataExercise);

    var elems = document.getElementsByClassName('answr_cls');
   
    Array.from(elems).forEach(function(element) {
            element.addEventListener("input", ChangeQuestion);
    });

}