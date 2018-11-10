// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-ingest").on("click", function(event) {
    console.log('change ingest!')
    var id = $(this).data("id");
    var newingest = $(this).data("newingest");

    var newFood = {
      devoured: newingest
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newFood
    }).then(
      function() {
        console.log("Changed location to", newingest);
        location.reload()
      }
    );
  });

  $("#clickhere").on("click", function(event) {
    console.log('submit form!')
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newTaste").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim() //?
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("create new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    console.log('delete burger!')
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});