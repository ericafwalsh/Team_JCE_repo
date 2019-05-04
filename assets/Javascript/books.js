$(document).ready(function () {

    $('select').formSelect();

    $("#search-button").on("click", function (event) {
        //clears previous search
        $("#mediaSection").empty();

        event.preventDefault();

        // This line grabs the input from the textbox
        var keyword = $("#search").val().trim();
        var numBooks = $("#numBooks").val();

        //this is the query url
        var queryURL = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyBYAAeWiq1UQDdVcU2C2QGQnkgb5B2QMvA&q=" + keyword;

        //performing Ajax get call
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            //within ajax call get response
            .then(function (response) {



                // for loop to append book info
                for (var i = 0; i < numBooks; i++) {

                    //creating vars for the response from google
                    var booktitle = response.items[i].volumeInfo.title;
                    var author = response.items[i].volumeInfo.authors[0];
                    var description = response.items[i].searchInfo.textSnippet;
                    var img = response.items[i].volumeInfo.imageLinks.thumbnail;
                    var info = response.items[i].volumeInfo.infoLink;

                    //using JQuery to create the required tags
                    var bookSection = $("<div>");
                    bookSection.addClass("card-panel light-blue");
                    bookSection.addClass("cardName_" + [i]);
                    $('#mediaSection').append(bookSection);

                    var imgSection = $("<img>");
                    imgSection.addClass("left-align");
                    $("cardName_" + [i]).append(smallCard);

                    var smallCard = $("<div>");
                    smallCard.addClass("card-content white-text");
                    $(".cardName_" + [i]).append(smallCard);

                    var link = $("<button>");
                    link.addClass("waves-effect waves-light btn");
                    $(".cardName_" + [i]).append(smallCard);

                    

                    $(".cardName_" + [i]).append("<img src=" + img + ">");
                    $(".cardName_" + [i]).append("<h4 text>" + booktitle + "</h4>");
                    $(".cardName_" + [i]).append("<h5>" + author + "</h5>");
                    $(".cardName_" + [i]).append("<p>" + description + "</p>");
                    $(".cardName_" + [i]).append("<button><a href=" + info +">more info");


                }

            });

    });
});


