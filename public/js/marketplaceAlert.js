$(document).on("click", ".claimItem", function () {
    console.log("I've been clicked");

    var currentUser = localStorage.getItem('id');

    var queryURL = "/api/users/";
    queryURL += currentUser;

    // Note that this is referreing to who is receiving the email, not the item!
    var itemName = $(this).data("title");
    var recipientEmail = $(this).data("email");
    var recipientName = $(this).data("giver");
    var senderName;
    var senderEmail;

    $.get(queryURL, function(data) {
        senderName = data.name;
        senderEmail = data.email;
    }).then(function() {
        var data = {
            service_id: 'gmail',
            template_id: 'hiking_template',
            user_id: 'user_ERzl6WhtfmRe34it4avnL',
            template_params: {
                'item_name': itemName,
                'recipient': recipientEmail,
                'recipient_name': recipientName,
                'sender': senderEmail,
                'sender_name': senderName,
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            console.log("Email sent!");
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });        
    });

    swal("Success!", "You've successfully claimed the item. \nA message has been sent to the owner!", "success");
});