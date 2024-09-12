let globalVars = {
  currentInterval: null,
  currPanelId: '',
};

// Exercise_Random_Question_Shared_Data Started
let sharedArray = [];
let arrIndx = 0;

function setSharedArray(arr) {
  sharedArray = arr;
}

function getSharedArray() {
  return sharedArray;
}

function setArrIndx(indx) {
  arrIndx = indx;
}

function getArrIndx() {
  return arrIndx;
}

// Memory_Builder_Random_Question_Shared_Data Started
let MB_sharedArray = [];
let MB_arrIndx = 0;

function setSharedArray_MB(arr) {
  debugger;
  MB_sharedArray = arr;
}

function getSharedArray_MB() {
  debugger;
  return MB_sharedArray;
}

function setArrIndx_MB(indx) {
  MB_arrIndx = indx;
}

function getArrIndx_MB() {
  return MB_arrIndx;
}

// Exporting all functions and globalVar object
export {
  setSharedArray,
  getSharedArray,
  setArrIndx,
  getArrIndx,
  setSharedArray_MB,
  getSharedArray_MB,
  setArrIndx_MB,
  getArrIndx_MB,
  globalVars,
};
