$(document).ready(function () {
 
		$('#thebid').on('show.bs.modal', function (event) {
			
		  var button = $(event.relatedTarget); // Button that triggered the modal
		  var name = button.data('name');
		  var currentbid = button.data('highbid');
		  var brand = button.data('brand');
		  var id = button.data('id');
		  var minimumbid = currentbid + 1;
		  var shoeBid = $("#minimumbid").val().trim();
		   
		  var modal = $(this);
		  modal.find('#shoe-modal-title').text(brand + " " + name);
		  modal.find('#modal-price').text("$" + currentbid);
		  modal.find('#lowbid').text("Lowest Bid: " + minimumbid);
		  $("#bid-button").on("click", function(event){
        event.preventDefault();

		  if (shoeBid > currentbid) {
		  	updateBid();
		  
		  }
		  else{
		  	alert("The current bid is $" + currentbid);
		  }
});
		    function updateBid(Shoes) {
				    $.ajax({
				      method: "UPDATE",
				      url: "/api/newObject",
				      data: { 
				      	highest_bid: JSON.stringify(shoeBid),
				      },
				      	where: {
				      		id: id,
				      	}
				    }).then(Shoes);
				  }

	});
		$('#thebuy').on('show.bs.modal', function (event) {
			
		  var button = $(event.relatedTarget); // Button that triggered the modal
		  var buynow = button.data('buy');
		 var namebuy = button.data('name');
		 var brandbuy = button.data('brand');   
		  var modal = $(this);

		  modal.find('#shoe-modal-name').text(brandbuy + " " + namebuy);
		  modal.find('#modal-buynow').text("$" + buynow);
		 
		});
});

