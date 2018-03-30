$(document).ready(function () {

    // $(document).on("click", "", function (event) {
    //     event.preventDefault();
   $(".btn").on("click",function(){
      // var sneakerText = $(this).$("#sneaker-title").text()
      // console.log(sneakerText);

        $('#bid-modal').modal('show')
   })

   $("#buy-now-button").on("click",function(){
        $('#buy-modal').modal('show')
   })

   $("#checkout-button").on("click",function(){
        window.location.href='./checkout';
   })

   $("#browse-button").on("click",function(){
        window.location.href='./buy';
   })

});
