$(document).ready(function() {

    $(document).foundation();

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

    // $('[data-addCart]').click(function () {
    //   $(this).addClass('is-adding')
    //   setTimeout(function () {
    //     $('[data-addCart]').removeClass('is-adding')
    //     $('[data-successMessage]').removeClass('hide')
    //   }, 2500);
    // });

    $(".claimItem").on("click", function () {
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
  
          }
        })
      })

    var itemPopulate = function(start, end, ROW_ID) {
  
        $.get("/api/marketplace/", function(data) {
            if (data) {

                for (var i = start; i < end; i++) {
            
                    var itemDiv = $("<div>");
                    itemDiv.addClass("column");
                
                    var imageTag = $("<img>");
                    imageTag.addClass("thumbnail");
                    imageTag.attr("style", "max-width:250px;");
                    imageTag.attr("src", "https://cdn2.iconfinder.com/data/icons/generic-06/100/Artboard_5-512.png");
                
                    var headTag = $("<h3>");
                    headTag.text(data[i].post_title);

                    var bodyTag = $("<p>");
                    bodyTag.text(data[i].post_body);
                
                    var buttonTag = $("<button>");
                    buttonTag.addClass("button button-add-cart claimItem");
                    buttonTag.text("Claim!");
                    buttonTag.attr("data-addCart");
                    buttonTag.attr("id", data[i].id);
                    buttonTag.attr("data-email", data[i].User.email);
                    buttonTag.attr("data-giver", data[i].User.name);
                    buttonTag.attr("data-title", data[i].post_title);
                
                    itemDiv.append(imageTag);
                    itemDiv.append(headTag);
                    itemDiv.append(bodyTag);
                    itemDiv.append(buttonTag);
                
                    $(ROW_ID).append(itemDiv);
                };

            } else {
                console.log("Error, could not reach database.")
            };
        });
    };

    itemPopulate(0, 4, "#row-2-market");
    itemPopulate(4, 8, "#row-1-market");
});