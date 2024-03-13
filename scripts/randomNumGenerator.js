import { setSharedArray } from './sharedData.js';

export function RandomNumGen(elemntId){
  //  debugger; 
    let elemId= elemntId;
    const [firstVal, operator, secondVal] = elemId.split("_");

 
    const range1 = firstVal =='single'  ? [1, 9] : (firstVal =='double' ? [11, 99]:  [101, 999]); 
    const range2= secondVal =='single'  ? [1, 9] : (secondVal =='double' ? [11, 99]:  [101, 999]);
    //debugger;
    const result = generateUniqueCombinations(range1, range2);
    setSharedArray(result);
    //debugger;
}


function calculateArraySizeInBytes(arr) {
    const jsonString = JSON.stringify(arr);
    const bytes = new TextEncoder().encode(jsonString).length;
    //debugger;
    return bytes;
}
  
function generateUniqueCombinations(range1, range2, desiredLength = 200) {
    const combinations = [];
  
    for (let i = range1[0]; i <= range1[1]; i++) {
      for (let j = range2[0]; j <= range2[1]; j++) {
        combinations.push([i, j].join(','));
      }
    }
  
    // Fisher-Yates Shuffle
    for (let i = combinations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinations[i], combinations[j]] = [combinations[j], combinations[i]];
    }
  
    const slicedResult = combinations.slice(0, desiredLength);
  
    const sizeInBytes = calculateArraySizeInBytes(slicedResult);
  
    console.log(`Array size: ${sizeInBytes} bytes`);
  
    return slicedResult;
  }


  
  