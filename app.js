
function Stopwatch(){
    
   let startTime, endTime, duration, seconds = 0;
   let timerStatus = false; 
   
   this.startTimer = function(){ 
    if (timerStatus)
        throw new Error('Timer already starteed');

    timerStatus = true; 
    startTime = new Date();
    
   };

   this.reset = function(){ 
    startTime = 0;
    endTime = 0;
    duration = 0;
    seconds = 0;
    timerStatus = false;
    
   };


   this.stopTimer = function(){
    if(!timerStatus)
        throw new Error('Timer is NOT running');

    timerStatus = false; 
    endTime = new Date();
    duration = (endTime - startTime) / 1000; 


   }; 

    //Getter function
    Object.defineProperty(this, 'duration', {
        get: function() {
        return duration;
        }
    });

}

const sw = new Stopwatch; 
sw.startTimer();
sw.stopTimer();
console.log(sw.duration);