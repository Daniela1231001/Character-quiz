$("button").click(function() {
$("#Tomoyo").hide();
$("#Syaoran").hide();
$("#Sakura").hide();
$("#Kero").hide();
 var number = $(".personality").val();
 var choose = $(".Card").val();
 number=parseInt(number);
 if (number >5 && choose === "Elements") {
     $("#Tomoyo").show();
 }
 else if ( number <=5 || choose !=="Elements") {
     $("#Syaoran").show();
 }
 else if(number >5 && choose !=="All") {
 $("#Kero").show();
 }
 else if(number <=5 && choose !=="All"){
     $("#Sakura").show();
    
}});



