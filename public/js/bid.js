$(document).ready(function () {
	$("#modal-button").on("click", function(event){
	    event.preventDefault();

	    var objectId = $("#sneakId").html();
	    console.log(objectId);

	    var currentBid = $("#current-bid").text();

	    console.log(currentBid);

	    alert("placing bid");
	    var shoeBid = $("#minimumbid").val().trim();
	    var newBid = parseInt(shoeBid);

	    console.log(newBid);

	    if (newBid > currentBid) {

	    	alert("New Highest Bid = $" + newBid);

		    function updateBid(Shoes) {
				    $.ajax({
				      method: "PUT",
				      url: "/api/newObject",
				      data: { 
				      	highest_bid: JSON.stringify(newBid),
				      },
				      	where: {
				      		id: parseInt(objectId),
				      	}
				    }).then(Shoes);
				  }
			//call function
			updateBid();
		}
		else {
			alert("The current highest bid is $" + currentBid);
		}

	  });
});

