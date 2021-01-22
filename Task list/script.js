
var clock =document.getElementById('clock');
function hexoClock(){
	var time = new Date();
	var h= time.getHours().toString();
	var m= time.getMinutes().toString();
	var y=time.getFullYear().toString();
	var mounth=time.getMonth().toString();
	var dat=time.getDate().toString();
	if (h.length<2) {
		h='0'+h;
	}
	if (m.length<2) {
		m='0'+m;
	}
	var clockString = h+':'+m;
	var dateString =y+'/'+mounth+'/'+dat;
	clock.textContent=clockString;
}
 $('.input2').click(function (e) { 

 });
hexoClock();