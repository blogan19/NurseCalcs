var minutes = 0;
var seconds = 0;
function time(){
	seconds++;
	if(seconds > 59){
		minutes++;
		seconds = 0;
	}
	if(seconds < 10){
		seconds = "0"+ seconds;
	}
	document.getElementById('timer').innerHTML = minutes + ":" + seconds;
	timer();
}
function timer(){
	setTimeout(time,1000);
}
timer();