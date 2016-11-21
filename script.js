$(document).ready(function() {
  function newRecipe (recipeAnn) {
    $(".recipes").children().hide();
    $(recipeAnn).fadeIn(1000);  
  }
  $("#recipeA").click(function() {
    newRecipe("#applesauce");
  });
  $("#recipeB").click(function() {
    newRecipe("#muffins");
  });
  $("#recipeC").click(function() {
    newRecipe("#turkey");
  });
  $("#recipeD").click(function() {
    newRecipe("#chili");
  });
  $("#recipeE").click(function() {
    newRecipe("#pork");
  });
  $("#recipeF").click(function() {
    newRecipe("#salad");
  });
  $("#recipeG").click(function() {
    newRecipe("#soup");
  });

  $(".btn").click(
    function() {
      $(this).animate({
        "padding-right": "10rem"
      }, 100);}, 
    function() {
      $(this).animate({
        "padding-right": "10rem"
      }, 100);
    });

  $("#title").animate({
    opacity: .5,
    height: "20%"
  });
});