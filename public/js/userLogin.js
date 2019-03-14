console.log('hello!');

$(document).ready(function(){

    console.log('hello part 2!');

    var emailInput = $("#email");
    var passwordInput = $("#password");

    $(".loginUser").on("click", function(event) {
        event.preventDefault();

        console.log("hello part 3!")

        emailInput = emailInput.val().trim();
        passwordInput = passwordInput.val().trim();

        var queryURL = "/api/user_login/";
        queryURL += emailInput;

        console.log(queryURL);

        $.get(queryURL, function(data) {
            if (data) {
                console.log('hello part 4!');
                console.log(data);

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