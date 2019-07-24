$(document).ready(function(){
$.easing.def = "easeInOutQuad";
$('li.button a').click(function(e){
var dropDown = $(this).parent().next();
$('.dropdown').not(dropDown).slideUp('slow');
dropDown.slideToggle('slow');
e.preventDefault();
})
$("li.button").click(function(){
var $ob = $(this);
$("li.button.slide").each(function(){
if($(this).hasClass("active")){
    if($(this)[0] != $ob[0]){
        $(this).removeClass("active");
    }
}
});
$(this).toggleClass("active");
}); 
});