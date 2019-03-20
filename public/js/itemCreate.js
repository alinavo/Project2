$(document).ready(function(){
    
    var imageURL;

    function readFile() {
        if (this.files && this.files[0]) {

            var FR = new FileReader();

            FR.addEventListener("load", function (e) {
                document.getElementById("img").src = e.target.result;
                imageURL = e.target.result;
                console.log(imageURL);
            });

            FR.readAsDataURL(this.files[0]);
        };
    };

    document.getElementById("inp").addEventListener("change", readFile);

    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        var itemName = $("#name");
        var itemLocation = $("#location");
        var itemCondition = $("select#condition option:checked");
        var itemDescription = $("#description");

        var userID = localStorage.getItem("id");

        var newItem = {
            post_title: itemName.val().trim(),
            location: itemLocation.val().trim(),
            item_condition: itemCondition.val().trim(),
            post_body: itemDescription.val().trim(),
            imageURL: imageURL,
            UserId: userID.trim(),
            active_listing: true
        };

        $.post("/api/list", newItem, function (data) {
            window.location.href = "/marketplace";
        });

    });
});