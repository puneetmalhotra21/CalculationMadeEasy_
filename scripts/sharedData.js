// sharedData.js

let sharedArray = [];
let arrIndx =0;

function setSharedArray(arr) {
  sharedArray = arr;
}

function getSharedArray() {
  return sharedArray;
}


function setArrIndx(indx) {
  //debugger;
  arrIndx = indx;
  //debugger;
}

function getArrIndx() {
  return arrIndx;
}

export { setSharedArray, getSharedArray,setArrIndx,getArrIndx };
