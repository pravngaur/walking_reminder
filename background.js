
const ALARM_NAME_REMINDER = 'walking_reminder';
const CLOCK_UPDATE = 'clock_update';

chrome.alarms.onAlarm.addListener(function( alarm ) {
    if(alarm && alarm.name === ALARM_NAME_REMINDER){//walking reminder alarm
        alert("Start Walking!!!");
        document.getElementById("iam_back").style.display = "block";
        cancelAlarm();
    }else{//Update the timer clock alarm
        timerClock();
    }
    
});