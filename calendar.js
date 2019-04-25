$(document).ready(function () {

    var apiKey = "c65ffe3f62969801df573185b16ae4961aa65370";
    var queryURL = "https://calendarific.com/api/v2/holidays?country=US&year=2019&api_key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

        console.log(response);

        });

});

