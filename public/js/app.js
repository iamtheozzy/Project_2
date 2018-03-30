$(document).ready(function () {

    // $(document).on("click", "", function (event) {
    //     event.preventDefault();
   $("#bid-button").on("click",function(){
        $('#bid-modal').modal('show')
   })

   $("#buy-now-button").on("click",function(){
        $('#buy-modal').modal('show')
   })

   $("#checkout-button").on("click",function(){
        window.location.href='./checkout';
   })

    // });
});
