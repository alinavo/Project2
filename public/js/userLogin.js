$(document).ready(function(){

    var emailInput = $("#email");
    var passwordInput = $("#password");

    $(".loginUser").on("click", function(event) {
        event.preventDefault();

        emailInput = emailInput.val().trim();
        passwordInput = passwordInput.val().trim();

        var queryURL = "/api/user_login/";
        queryURL += emailInput;

        $.get(queryURL, function(data) {
            if (data) {
                if (data.password === passwordInput) {
                    localStorage.setItem("id", data.id);
                    localStorage.setItem("allowed", true);
                    window.location.href = "/marketplace";
                } else {
                    console.log("Wrong password!")
                };
            };
        });
    });
});