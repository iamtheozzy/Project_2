$(document).ready(function () {
	$("#modal-button").on("click", function(event){
	    event.preventDefault();

	    var currentBid = $("#current-bid").text();

	    console.log(currentBid);

	    alert("placing bid");
	    var shoeBid = $("#minimumbid").val().trim();
	    var newBid = parseInt(shoeBid);

	    console.log(newBid);

	    if (newBid > currentBid) {

	    	alert("New Highest Bid = " + newBid);

		    function updateBid(Shoes) {
				    $.ajax({
				      method: "PUT",
				      url: "/api/new",
				      data: JSON.stringify(newBid)
				    }).then(Shoes);
				  }
			//call function
			updateBid();
		}
		else {
			alert("The current highest bid is " + currentBid);
		}

	  });
});

