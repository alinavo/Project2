var itemPopulate = function(start, end) {
  var posts;

  $.get("/api/marketplace/", function(data) {
    if (data) {
      posts = data;
    } else {
      console.log("Error, could not reach database.")
    }
  });

  for (var i = start; i < end; i++) {

    var itemDiv = $("<div>");
    itemDiv.addClass("column");

    var imageTag = $("<img>");
    imageTag.addClass("thumbnail");
    imageTag.attr("src", "defaultURL.com");

    var headTag = $("<h3>");
    headTag.text(posts[i].post_title);

    var buttonTag = $("<button>");
    buttonTag.addClass("button button-add-cart");
    buttonTag.text("Claim!");
    buttonTag.attr("data-addCart");
    buttonTag.attr("data-email", posts[i].User.email);
    buttonTag.attr("data-giver", posts[i].User.name);
    buttonTag.attr("data-title", posts[i].post_title);

    itemDiv.append(imageTag);
    itemDiv.append(headTag);
    itemDiv.append(buttonTag);

    $("#ROW_ID").append(itemDiv);
  };
};
Collap