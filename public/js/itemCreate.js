$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("hello part 1!");

    var itemName = $("#name");
    var itemLocation = $("#location");
    var itemCondition = $("select#condition option:checked");
    var itemDescription = $("#description");

    var userID = localStorage.getItem("id");

        $("#submitBtn").click(function () {
            console.log(itemName);
        });

        $(function () {
            $(window).scroll(function () {
                var winTop = $(window).scrollTop();
                if (winTop >= 30) {
                    $("body").addClass("sticky-shrinknav-wrapper");
                } else {
                    $("body").removeClass("sticky-shrinknav-wrapper");
                }
            });
        });

    var newItem = {
        post_title: itemName.val().trim(),
        location: itemLocation.val().trim(),
        item_condition: itemCondition.val().trim(),
        post_body: itemDescription.val().trim(),
        UserId: userID.val().trim(),
        active_listing: true
    };

    console.log(newItem);


    $.post("/api/list", newItem, function (data) {
        console.log(data);
        window.location.href = "/marketplace";
    });

});