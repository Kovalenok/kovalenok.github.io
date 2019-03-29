var arr = null;

function load() {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = processD;
	httpRequest.open ('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', true);
	httpRequest.send (null);
}

function processD () {
	if (this.readyState == 4) {
		if (httpRequest.status == 200) {
			var result = JSON.parse(httpRequest.responseText);
			arr = result;
		} else {
			//
		}
	}
}
function get() {
	console.log(arr);
	var maney = document.getElementById('amount').value;
	for (var i = 0; i < arr.length; i++) {
	var obj = arr[i];
	var kurs = document.getElementById('currencyCode');
	if (kurs.options[kurs.selectedIndex].value == obj.cc) {
		 var resenter = maney/obj.rate;
		 var res = document.getElementById('convertedAmount');
		 res.value = resenter;

	}
  }
}

//for (var key in null) {

