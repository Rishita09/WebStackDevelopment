$(document).ready(function () {
  $("#fetchBooks").click(function () {
    // AJAX request to fetch JSON data from the server
    $.ajax({
      url: "books.json", // Replace with your API URL
      type: "GET",
      dataType: "json",
      success: function (data) {
        // Call the displayBooks function to render the list of books
        displayBooks(data);
      },
      error: function () {
        $("#bookList").html("An error occurred while fetching the books.");
      },
    });
  });

  function displayBooks(books) {
    var bookList = $("#bookList");
    bookList.empty(); // Clear previous content

    if (books.length === 0) {
      bookList.html("No books available.");
      return;
    }

    var div = $("<div>");
    books.forEach(function (book) {
      var p = $("<p>").text(
        "Title: " +
          book.title +
          " ||||---|||| Author: " +
          book.author +
          " ||||---|||| Genre: " +
          book.genre
      );
      div.append(p);
    });

    bookList.append(div);
  }
});
