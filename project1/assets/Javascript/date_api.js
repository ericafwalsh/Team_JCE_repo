$(document).ready(function () {
    // initializing materializing
    $('.dropdown-trigger').dropdown();

    $("#customDateForm").hide();

    $(".dropdown-item").on("click", calendar);

    $("#other_event").on("click", showForm);

    $("#otherSubmit").on("click", customDate);

    function showForm() {
        $("#customDateForm").show();
    };

    function customDate() {

        var occasion_date = new Date($("#userProvidedDate").val());
        console.log(occasion_date);

        var today = new Date();
        var days_until = Math.round((occasion_date - today) / (1000 * 60 * 60 * 24));

        $("#daysRemaining").html("Days Remaining: " + days_until);

    };

    function calendar() {

        var holidayName = $(this).attr("data-name");

        var apiKey = "c65ffe3f62969801df573185b16ae4961aa65370";
        var queryURL = "https://calendarific.com/api/v2/holidays?country=US&year=2019&api_key=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                var results = response.response.holidays;

                for (var i = 0; i < results.length; i++) {

                    if (results[i].name === holidayName) {

                        var date = results[i].date.iso;

                        var today = new Date();
                        var occasion_date = new Date(date);

                        var days_until = Math.round((occasion_date - today) / (1000 * 60 * 60 * 24));

                        if (days_until < 0) {
                            days_until = days_until + 365;
                        }

                        $("#daysRemaining").html("Days Remaining: " + days_until);
                    }

                };

            });

    };
});
