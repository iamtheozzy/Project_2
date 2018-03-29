$(document).ready(function () {
    var shoeName = $("#name");
    var shoeBrand = $("#brand");
    var shoeSize = $("#size");
    var shoeBuyNow = $("#buynow");
    var shoeMinimum = $("#minimumbid");
$("#sell-page-button").on("click", createShoe);
    function createShoe(event) {
    event.preventDefault();
    var sellShoe = {
       name: shoeName.val().trim(),
       brand: shoeBrand.val().trim(),
       size: shoeSize.val().trim(), 
      buynow: shoeBuyNow.val().trim(),
      minimumbid: shoeMinimum.val().trim()
      
    };

    console.log(event);

    $.post("/api/shoeObject", shoe, shoes);
    shoeName.val("");
    shoeBrand.val("");
    shoeSize.val("");
    shoeBuyNow.val("");
    shoeMinimum.val("");
  }


});