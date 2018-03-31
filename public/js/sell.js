$(document).ready(function () {
  $("#sell-submit").on("click", function(event){
    event.preventDefault();

    alert("adding shoe");
    var createShoe = {
       name: $("#name").val().trim(),
       brand: $("#brand").val().trim(),
       size: $("#size").val().trim(), 
       photo: $("#photo").val().trim(),
       buy_now: $("#buynow").val().trim(),
       minimum_bid: $("#minimumbid").val().trim(),
       highest_bid: 100,
       sold: false

    };

    console.log(createShoe);

    $.post("/api/newObject", createShoe)
      .then(function(data) {
      console.log(data);
    });

  })
  });






