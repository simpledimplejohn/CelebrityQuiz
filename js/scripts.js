$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = $("#gender").val();
    const activities = $("#activities").val();
    
  
    if (age > 40 && gender === "male") {
      $(".previous").hide();
      $("#sean-connery").show();
    } else if (age < 20 && gender === "female") {
      $(".previous").hide();
      $("#billie-eilish").show();
    } else if (age > 21 && age < 39 && activities === "reading") {
      $(".previous").hide();
      $("#shia-labeouf").show();
    } else {
      $(".previous").hide();
      $("#error").show();
    }
  });
});