$(document).ready(function() {
  $("#search").click(function() {

    $("#output").empty();
    //get search input
    var searchTerm = $("#searchTerm").val();

    //API url with search term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        if (data[1] != "") {
          data[1].forEach(function(val, index) {
            $("#output").prepend('<a href="' + data[3][index] + '" class="list-group-item list-group-item" target="_blank">' +
              '<h4 class="list-group-item-heading text-primary"><strong>' + data[1][index] + '</strong></h4>' +
              '<p class="list-group-item-text">' + data[2][index] + '</p>' +
              '</a>');
          });
        } else {

          $("#output").prepend('<a class="list-group-item list-group-item"><h4 class="list-group-item-heading text-primary"><strong>No result</strong></h4></a>');
        }
        console.log(data);
      },
      error: function(errorMessage) {
        alert(errorMessage);
      }
    });

  });

  $("#searchTerm").keypress(function(e) {
    if (e.which == 13) {
      $("#search").click();
    }
  });

  // $("#searchTerm").keyup(function() {
  //   $("#search").click();
  // });
});
