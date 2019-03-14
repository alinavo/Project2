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

        console.log(newUser);

        $.post("/api/new_user", newUser, function(data) {
            console.log(data);
            window.location.href = "/member";
        });
    });
});