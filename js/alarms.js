(function () {
    'use strict';
    


     const ALARM_NAME_REMINDER = 'walking_reminder';
     const CLOCK_UPDATE = 'clock_update';
     const INTERVAL_WALK = getInterval();

     function createAlarm() {
        setInterval(2);
        setCountDownTime();
        
        chrome.alarms.create(ALARM_NAME_REMINDER, {
            periodInMinutes: 2
        });

        chrome.alarms.create(CLOCK_UPDATE, {
          delayInMinutes: 0, periodInMinutes: 1
        });

        document.getElementById("disable_alarm").style.display = "block";
        document.getElementById("enable_alarm").style.display = "none";

      
       
     }

     function cancelAlarm() {
      chrome.alarms.clear(ALARM_NAME_REMINDER);
      chrome.alarms.clear(CLOCK_UPDATE);
      document.getElementById("disable_alarm").style.display = "none";
      document.getElementById("enable_alarm").style.display = "block";
      clearClock();
       
     }


   // document.getElementById("toggleAlarm").addEventListener('click', doToggleAlarm);
   document.getElementById("disable_alarm").addEventListener('click', cancelAlarm);
   document.getElementById("enable_alarm").addEventListener('click', createAlarm);
   document.getElementById("iam_back").addEventListener('click', createAlarm);

   createAlarm();
//checkAlarm();

    
  })();
