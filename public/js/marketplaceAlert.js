$(document).on("click", ".claimItem", function () {
    console.log("I've been clicked");

    swal("You've successfully claimed the item. A message has been sent to the owner!", {
        buttons: {
            none: "Close"
        }
    }).then((value) => {

        console.log(value);

        switch (value) {

            // case ("send"):
            //   swal("Type a message to the giver.", {
            //     content: "input",
            //   })
            //     .then((value) => {
            //       swal(`You typed: ${value}`);
            //     });
            //   console.log(value);
            //   // swal("Success!", "Your Message has been sent.", "success");
            //   break;

            case ("none"):
                swal("Success!", "You have been placed in line for the item!", "success");
                break;

        };
    });
});