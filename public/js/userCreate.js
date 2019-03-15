console.log('hello!');

$(document).ready(function(){

    console.log('hello part 2!');

    var nameInput = $("#name");
    var emailInput = $("#email");
    var passwordInput = $("#password");
    var zipcodeInput = $("#zip");

    $(".newUser").on("click", function(event) {
        event.preventDefault();

        console.log("hello part 3!")

        var newUser = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            location: zipcodeInput.val().trim()
        };
        
        var queryURL = "/api/user_login/";
        queryURL += newUser.email;

        $.get(queryURL, function(data) {
            if (data) {
                console.log("Sorry, that email is already in use!");
            } else {
                console.log(newUser);

                $.post("/api/new_user", newUser, function(data) {
                    console.log(data);
                    window.location.href = "/member";
                });
            };
        });
    });
});