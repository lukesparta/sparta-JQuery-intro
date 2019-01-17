// document.addEventListener("DOMContentLoaded", function(){
  
// }); //    END OF DOMCONTENTLOADED


//event loads everything on the page
$(function(event){
  var itemCount = $("#count");
  var listCon = $("unorderedList");
  var itemList = $(".listItem");
  var li = document.createElement("li");
  li.innerHTML = "Wash car"
  document.getElementById("unorderedList").appendChild(li);

  var arrToDo = ["hello", "my", "name", "is"];

  //JQuery
  $(arrToDo).each(function(item, todo){
    console.log(todo);
  });

  //JS-taking each element of the array and naming it 'todo'
  arrToDo.forEach(function(todo){
    console.log(todo); //printing content of each element of array
  });

  itemCount.css("color", "Blue");

  $("li").addClass("doneJS");



  

}); //END OF LOADED PAGE FUNCTION