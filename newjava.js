$(document).ready(function(){
    $("#add").click(function(){
    var text= $("#textfield").val();
$("#list").append("<li>"+text+"</li>");

    });
});