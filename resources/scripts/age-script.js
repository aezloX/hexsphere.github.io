/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
window.onload = function () {
	var currentYear = new Date().getFullYear();
	var currentMonth = new Date().getMonth() + 1;
	var currentDate = new Date().getDate();
	var birthYear = 2004;
	var month = 1;
	var date = 23;
	var age = currentYear - birthYear;

	if ((-1 < month - currentMonth || (month === currentMonth && date < currentDate))) {
		age = age - 1;
	}

	document.getElementById('age').innerHTML = age;
};
