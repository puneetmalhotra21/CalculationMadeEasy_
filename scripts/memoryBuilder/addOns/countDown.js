export   function startCountdown(initialValue) {
    let count = initialValue;
    const countdownNumber = document.getElementById('countdownNumber');
 
    const countdownInterval = setInterval(() => {
     // //debugger;
      countdownNumber.textContent = count;
      count--;
  
      if (count < 0) {
        clearInterval(countdownInterval);
        countdownNumber.textContent = 'Done!';
      }
    }, 1000);
  }