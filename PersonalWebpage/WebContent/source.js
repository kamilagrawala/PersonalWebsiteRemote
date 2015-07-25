 $(window).load(function() {
 	$(".loader").fadeOut("slow");
 	$(".tabs").fadeIn("slow");
	$("#circularDiv").fadeIn("slow");

 });
 
 $(window).ready(function() {
 	$(".tabs").fadeIn("slow");
 });

 $(function() {
    $( ".tabs" ).tabs();
 });
 
 
 $("#circularDiv").flip({
        axis: "y", // y or x
        reverse: false, // true and false
        trigger: "hover" // click or hover
 });