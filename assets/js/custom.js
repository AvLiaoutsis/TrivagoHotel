let locationdropdown = document.getElementById('location-dropdown');
locationdropdown.length = 0;



let defaultOption = document.createElement('option');
defaultOption.text = 'All';


locationdropdown.add(defaultOption);
locationdropdown.selectedIndex = 0;

let cities = [];

$(function () {
    $('#datetimepicker').datetimepicker({
        defaultDate: moment(),
        format: 'dddd, DD/MM/YYYY'
    });
    $('#datetimepicker1').datetimepicker({
        defaultDate: moment().add(7, 'd'),
        format: 'dddd, DD/MM/YYYY'
    });

});

function stargenerator(num) {
    calc = "";
    for (var i = 0; i < num; i++) {
        calc += " ★"
    }
    return calc;
}

function updateTextInput(number) {
    var nf = new Intl.NumberFormat();
    document.getElementById('priceRange').innerHTML = "Max. " + nf.format(number);

}
fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        // console.log($(data[1]['entries'][0].thumbnail))
        $("#firstimage").attr("src", data[1]['entries'][0].thumbnail);
        $("#secondimage").attr("src", data[1]['entries'][1].thumbnail);

        let option;

        for (let i = 0; i <= data.length; i++) {
            option = document.createElement('option');

            option2 = document.createElement('option');
            console.log(data[1]["entries"][i].city)
            option2.text = data[1]["entries"][i].city;
            option2.value = data[1]["entries"][i];
            locationdropdown.add(option2);

            cities.push(data[1]["entries"][i].city);
        }
        $("#search").autocomplete({
            source: cities
        });

        // console.log("hi")
        // console.log(cities)
        // console.log(data[1]["entries"][0].mapurl)

        $("#map").attr("src", data[1]["entries"][0].mapurl)
        $("#description-name").html("<b>" + data[1]["entries"][0].hotelName + "</b");
        $("#description-stars").html("<span id='stars'>" + stargenerator(data[1]["entries"][0].rating) +
            "</span>" + "   Hotel");
        $("#description-path").text(data[1]["entries"][0].city + " 0,3 miles to Champs Elysees");
        $("#description-rating").html("<span id='ratingspan'>" + data[1]["entries"][0].ratings.no +
            "</span>" + " " + '<b>' + data[1]["entries"][0].ratings
            .text + '</b>' + " (1736 reviews)");
        $("#description-secondrating").text(data[1]["entries"][0].ratings.text + " Location (9.2 / 10) ");
        $("#forthrowhotel").html("$" + data[1]["entries"][0].price);
        $("#forthrowhotel2").html("$" + data[1]["entries"][0].price);

        $("#description-name-2").html("<b>" + data[1]["entries"][1].hotelName + "</b");
        $("#description-stars-2").html("<span id='stars'>" + stargenerator(data[1]["entries"][1].rating) +
            "</span>" + "   Hotel");
        $("#description-path-2").text(data[1]["entries"][1].city + " 0,3 miles to Champs Elysees");
        $("#description-rating-2").html("<span id='ratingspan'>" + data[1]["entries"][1].ratings.no.toFixed(
                1) + "</span>" + " " + '<b>' + data[1]["entries"][0].ratings
            .text + '</b>' + " (473 reviews)");
        $("#description-secondrating-2").text(data[1]["entries"][1].ratings.text + " Location (9.4 / 10) ");
        $(".secondhotelprice").html("$" + data[1]["entries"][1].price);
        $(".secondhotelpricemul3").html("$" + data[1]["entries"][1].price * 3);

        $("#forthrowhotelmul3").html("3 nights for " + '<span id="colorgreen">' + "$" + "<b>" + data[1][
            "entries"
        ][0].price * 3 + "</b>" + "</span>");
    });