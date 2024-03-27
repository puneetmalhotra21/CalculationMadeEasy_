export function checkDevice(){

    
    if (isMobileDevice()) {
        return 'Mobile';
        console.log('This is a mobile device.');
    } else {
        return 'Web';
    }
    
   
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}