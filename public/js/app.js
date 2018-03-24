$(document).ready(function () {
    $(document).on("click", ".devourburger", function (event) {
        event.preventDefault();

        var updateID = $(this).data('id');
        var updatePath = "/api/burgers/" + updateID;
        var updatedBurger = {
            id: updateID,
            devoured: true
        };

        // updated ajax call for the front end to UPDATE the burgers
        $.ajax(updatePath, {
            type: "PUT",
            data: updatedBurger
        }).then(function () {
            console.log("Burger at: " + updateID + "updated!");
            location.reload();
        });
    });
});