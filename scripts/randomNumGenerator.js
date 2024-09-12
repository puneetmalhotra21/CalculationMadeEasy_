import { setSharedArray,setSharedArray_MB } from './sharedData.js';

export function RandomNumGen(elemntId){
  debugger; 
    let elemId= elemntId;
    const [firstVal, operator, secondVal] = elemId.split("_");

 
    const range1 = getRange(firstVal);
   const range2 = getRange(secondVal);
    const result = generateUniqueCombinations(range1, range2);
    setSharedArray(result);
    ////debugger;
}


function getRange(digitVal){
  let range = digitVal =='single'  ? [1, 9] : (digitVal =='double' ? [11, 99]:  [101, 999]); 
  return range
}

  
function generateUniqueCombinations(range1, range2, desiredLength = 200) {
    let  combinations = [];
  
    for (let i = range1[0]; i <= range1[1]; i++) {
      for (let j = range2[0]; j <= range2[1]; j++) {
        combinations.push([i, j].join(','));
      }
    }
  
    // Fisher-Yates Shuffle
    combinations = shuffle(combinations);
    const slicedResult = combinations.slice(0, desiredLength);
    return slicedResult;
  }

  export function RandomNumSetGen(elemId){
   // debugger;
    let tempArry = elemId.split('_');
    if(tempArry.length ==2){
      let digitStr = tempArry[1];
      const range = getRange(digitStr);
      const result = generateUniqueSet(range);
      debugger;
      setSharedArray_MB(result);
    }
    
    //debugger;
}
 

function generateUniqueSet(range) {

    let numArray = [];
    
  for (let i = range[0]; i <= range[1]; i++) {
          numArray.push(i);
    } 
    
   
    let  combinations = generateCombinations(numArray);
    console.log(combinations);
    return combinations;

  }



function generateCombinations(numArray) {
  
  const combinations = [];

    const generate = (arr, index, combination) => {
     
      if (combination.length === 5) {
            combinations.push(shuffle(combination)); // Shuffle the combination before pushing
            return;
        }

        if (index >= arr.length || combinations.length == 20) return;

        generate(arr, index + 1, [...combination, arr[index]]);
        generate(arr, index + 1, [...combination]);
    };

    generate(numArray, 0, []);
    debugger;  
    return combinations;
}



  
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

