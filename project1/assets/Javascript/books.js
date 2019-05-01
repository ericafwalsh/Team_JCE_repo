
$("#search-button").on("click", function (event) {

    event.preventDefault();

    // This line grabs the input from the textbox
    var keyword = $("#searchTerm").val().trim();
    var numBooks = $("#numBooks").val();
    var queryURL = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyBYAAeWiq1UQDdVcU2C2QGQnkgb5B2QMvA&q=" + keyword;


    //this is the query url

    //performing Ajax get call
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        //within ajax call get response
        .then(function (response) {

            // console.log(response.items[0].volumeInfo.title);
            // console.log(response.items[0].volumeInfo.authors[0]);
            // console.log(response.items[0].volumeInfo.description);

            for (var i = 0; i < numBooks; i++) {

                var booktitle = response.items[i].volumeInfo.title;
                var author = response.items[i].volumeInfo.authors[0];
                var description = response.items[i].volumeInfo.description;

                console.log(booktitle);
                console.log(author);
                console.log(description);

                var bookSection = $("<div>");
                bookSection.addClass("media bg-light border");
                bookSection.addClass("cardName_" + [i]);
                $('#mediaSection').append(bookSection);

                var smallCard = $("<div>");
                smallCard.addClass("media-body");
                $(".cardName_" + [i]).append(smallCard);

                $(".cardName_" + [i]).append("<h4>" + booktitle + "</h4>");
                $(".cardName_" + [i]).append("<h5>" + author + "</h5>");
                $(".cardName_" + [i]).append("<p>" + description + "</p>");

             
            }
        });

});
// $("#clear-all").on("click", clear);