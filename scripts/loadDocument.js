//import { TopicToggle,ChangeQuestion,subExerciseHandler,ChangeOperator,SetupSeeMemorizeWrite,LoadComponent } from "./eventFactory.js";
import { topicIds,subTopicIds ,slctOprtionsIds} from './config.js';
import { Intializer } from "./intializer.js";

export function LoadDocument(){
    createTopicNavList();
 }

 function createTopicNavList(){
    ////debugger;
    let comp = document.getElementById('topic_list_colm');
    let compPath = '../Views/' + 'topicNavList_comp' + '.html';
    fetch_attachHTML(comp,compPath,'navList')
}



 function LoadComponent(){
    topicIds.forEach(topic_Id => {
        let topicId = topic_Id+'_topic';
        createTopicElem(topicId);
        const comp = document.getElementById(topicId);
        if(comp){
            let compFileName = topic_Id+'_comp';
            let compPath = '../Views/topics/' + compFileName + '.html';
            fetch_attachHTML(comp,compPath,'loadComp');
        }
    });
}


function fetch_attachHTML(comp,compPath,callFrom){
     fetch(compPath, { method: 'HEAD' })
         .then(response => {
             if (response.ok) {
                 return fetch(compPath);
             } else {
                 throw new Error('File not found');
             }
         })
         .then(response => response.text())
         .then(html => {
             //debugger;
             comp.innerHTML = html;
             if(callFrom == 'navList'){
                LoadComponent();
             }else{
                 Intializer();
             }
         })
         .catch(error => {
             console.error('Error fetching component:', error);
         });
        
 }

 function createTopicElem(topicId){
    const divElement = document.createElement('div');
    divElement.setAttribute('id',topicId);
    divElement.setAttribute('class', 'col-sm-8 topic_cls');
    if(topicId=='memory_builder_topic'){
        divElement.setAttribute('style', 'display: block;');
    }else{
        divElement.setAttribute('style', 'display: none;');
    }
    
    
    const referenceElement = document.getElementById('topic_list_colm');

    referenceElement.insertAdjacentElement('afterend', divElement);
}