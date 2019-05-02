 $(document).ready(function () {
    console.log("ready");
    $('select').formSelect();

    $("#search-button").on("click", function (event) {

        event.preventDefault();

        // This line grabs the input from the textbox
        var keyword = $("#search").val().trim();
        var numBooks = $("#numBooks").val();
        var queryURL = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyBYAAeWiq1UQDdVcU2C2QGQnkgb5B2QMvA&q=" + keyword;

        console.log(keyword)
        console.log(numBooks)
        //this is the query url

        //performing Ajax get call
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            //within ajax call get response
            .then(function (response) {

                console.log(response);

                // for loop to append book info
                for (var i = 0; i < numBooks; i++) {

                    var booktitle = response.items[i].volumeInfo.title;
                    var author = response.items[i].volumeInfo.authors[0];
                    var description = response.items[i].volumeInfo.description;
                    var img = response.items[i].volumeInfo.imageLinks.thumbnail

                    console.log(img);
                    console.log(booktitle);
                    console.log(author);
                    console.log(description);

                    var bookSection = $("<div>");
                    bookSection.addClass("card-panel light-blue");
                    bookSection.addClass("cardName_" + [i]);
                    $('#mediaSection').append(bookSection);

                    var imgSection = $("<img>");
                    imgSection.addClass("left");
                    $("cardName_" + [i]).append(smallCard);

                    var smallCard = $("<div>");
                    smallCard.addClass("card-content white-text");
                    $(".cardName_" + [i]).append(smallCard);

                    $(".cardName_" + [i]).append("<img src=" + img  + ">");
                    $(".cardName_" + [i]).append("<h4 text>" + booktitle + "</h4>");
                    $(".cardName_" + [i]).append("<h5>" + author + "</h5>");
                    $(".cardName_" + [i]).append("<p>" + description + "</p>");


                }
            });

    });
});
