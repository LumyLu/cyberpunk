var f = setInterval(function(){
	$("h").html(new Date().getHours());
	$("m").html(new Date().getMinutes());
	$("s").html(new Date().getSeconds());
},1000)