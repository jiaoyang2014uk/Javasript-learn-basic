window.addEventListener("load", initDate,false)

function initDate(){
	var now =  new Date ();

	if(now.getDay() > 0 && now.getDay() < 6){
		var dtString = " Today is Weekday."
	}
	else{
		var dtString = " WOW! Today is Weekend!"
	}

	document.getElementById("dtField").innerHTML = dtString;
}