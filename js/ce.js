//$(document)
//.ready(
//function() { 
var sses = document.getElementById('sses');
var sCount = 1;
function addSS() {
	var di = document.createElement("span");
	di.innerHTML = "<br/><input id='na" + sCount + "' type='text'/>"
			+ "<input id='va" + sCount + "' type='text'/>";
	sses.appendChild(di);
	sCount++;
}

function delSS() {
	if (sCount > 1) {
		 
		sses.removeChild(sses.lastChild);
		sCount--;
	}
}
function connect() {
	document.getElementById('resultData').innerHTML = "";
	var id = 'myApi';
	var API = document.getElementById(id).value;
	var data = "{'" + document.getElementById("na0").value + "':'"
			+ document.getElementById("va0").value + "'";
	for ( var i = 1; i < sCount; i++) {
		var nid = 'na' + i;
		var vid = 'va' + i;
		data += ",'" + document.getElementById(nid).value + "':'"
				+ document.getElementById(vid).value + "'";
	}
	data += "}";
	addBrand(API, data);
}
function addBrand(API, postData) {
	document.getElementById('requestData').innerHTML = "API:&nbsp&nbsp&nbsp"
			+ API + "<br/>JSON数据:&nbsp&nbsp&nbsp" + postData;
	var response = $
			.ajax( {
				url :  API,//  
				type : "post",//  
				data : postData, //  
				 dataType:'jsonp', 
				contentType : "application/json;charset=utf-8",//   
				success : function(data) {//  

					document.getElementById('resultData').innerHTML = response.responseText;

				},
				error : function(xhr, ajaxOptions, thrownError) {
					document.getElementById('resultData').innerHTML = "Http status: "
							+ xhr.status
							+ " "
							+ xhr.statusText
							+ "\najaxOptions: "
							+ ajaxOptions
							+ "\nthrownError:"
							+ thrownError
							+ "\n"
							+ xhr.responseText;
				}
			});

}
// });
