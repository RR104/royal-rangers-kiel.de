var terminübersicht = 'inc/googlecaltrmn.html';

var month = 'inc/googlecalmth.html';

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


//var data = document.getElementById('calendarobject').data;

console.log(w);
console.log(h);

if(w > h)
	{
		document.getElementById('calendarobject').data = month;
	}
else{
	document.getElementById('calendarobject').data = terminübersicht;
}