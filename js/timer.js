
//$(setInterval(timer_function, 1000));
//Global variables

let countDownTime;
let interval;
let timeRemaining;

const setInterval = (minutes) => {
  if(minutes){
      interval = minutes;
  }
}

const getInterval = () => {
  return interval;
}

const setCountDownTime = () => {
  if(interval){
      let dateObj = new Date();
      dateObj.setMinutes( dateObj.getMinutes() + interval );
      countDownTime = dateObj.getTime();
  }
}



var timerClock = function() {
    var now = new Date().getTime();
    var distance = countDownTime - now;
    timeRemaining = distance;
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("minute").innerHTML = minutes;  
    document.getElementById("second").innerHTML =seconds;  
    
      
    // If the count down is over, write some text 
    if (distance < 0) {
      // clearInterval(x);
      document.getElementById("minute").innerHTML ='0' ;  
      document.getElementById("second").innerHTML = '0';
    }
    
  }

  var clearClock = function() {
    // clearInterval(x);
    document.getElementById("minute").innerHTML ='0' ;  
    document.getElementById("second").innerHTML = '0';
  }

  
