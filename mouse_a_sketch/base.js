console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!")
  	
  	var atd = $("td");

  	// for(var i = 0; i < atd.length; i++) {
  	// 	$(atd[i]).on("mouseover", colorMe);  		
  	// }

  	$.each($(atd), function(i, v){
  		$(atd[i]).on("click", colorMe);
  	});

  	function colorMe() {
  		var color = $("input").val();

  		$(this).css("background-color", color);
  	}
  		
})