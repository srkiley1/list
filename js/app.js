
$(document).ready( function(){
	  
	// $("#items").prepend("<li>pita bread</li><li>oil</li><li>lemon</li>");
	$("#text").click(function(){
	//	alert($("#text2").val());
	$(".col-md-2").prepend("<li class='list-item'>" + $("#text2").val() + "</li>");
			});
	$('button').click(function() {
		$('.list-item').last().remove();
			});

});
