var minutes = 2 ;
var timer;

function startTime(initial) {
	initialTime =initial;
    var s = initialTime % 60;
    var m0 = initialTime / 60;
    var m = parseInt(m0);
    // add a zero in front of numbers<10
    m = AddZero(m);
    s = AddZero(s);
    var time = m + ":" + s ;
    //console.log( m + ":" + s) ;
    passedTime= initialTime - 1 ;
	document.getElementById('TimerDiv').innerHTML = time ;
		timer =setTimeout(function(){ startTime(passedTime) }, 1000);
    return time;
}
function setMinutes(min){
	minutes = min ;
	console.log(min , minutes);
}

function AddZero(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}
 function stop() {
        if (timer) {
            clearTimeout(timer);
           // document.getElementById('TimerDiv').innerHTML = time +"paused" ;
            timer = 0;
        }}
