// Variables for location dropdownlist 
let locationdropdown = document.getElementById('location-dropdown');
locationdropdown.length = 0;



let defaultOption = document.createElement('option');
defaultOption.text = 'All';


locationdropdown.add(defaultOption);
locationdropdown.selectedIndex = 0;

let cities = [];

// DateTimePicker functions
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


// Function to produce hotels
function hotelgenerator(hotel) {

    return (
        '<div class="row HotelRow"><div class="col-sm  borderless ">' +
        '<img id="firstimage" src="' + hotel.thumbnail + '" alt="..." class="img-thumbnail images">' +
        '                <span>' +
        ' <img class="imgmap" src="assets/images/vector-roadmap-location-map.jpg"><button class="btn btn-secondary btn-map" data-toggle="modal" data-target="#myModal">View  Map</button></img>' +

        ' </span> </div>' +
        '<div class="col-sm   col-border borderless ">' +
        '   <ul class="list-group  ">' +
        '        <li class="list-group-item forthrowlist"><span class="description-name">' + "<b>" + hotel.hotelName + "</b>" + '</span></li>' +
        '        <li class="list-group-item forthrowlist"><span class="description-stars">' + "<span class='stars'>" + stargenerator(hotel.rating) +
        "</span>" + "   Hotel" + '</li>' +
        '        <li class="list-group-item forthrowlist"><span class="description-path">' + hotel.city + '</li>' +
        '        <li class="list-group-item forthrowlist"><span class="description-rating">' + "<span id='ratingspan'>" + hotel.ratings.no.toFixed(1) +
        "</span>" + " " + '<b>' + hotel.ratings
        .text + '</b>' + " (1736 reviews)" + '</li>' +
        '        <li class="list-group-item forthrowlist"><span class="description-secondrating">' + hotel.ratings.text + " Location (9.2 / 10) " + '</li>' +
        '    </ul>' +
        '    </span>' +
        '</div>' +
        ' <div class="col-sm   col-border borderless customborder">' +
        '    <ul class="list-group ">' +
        '         <center>'

        +
        '            <li id="HotelCustomPrice" class="list-group-item forthrowlist">Hotel Website<br><span' +
        '                    id="forthrowhotel">' + hotel.price + '</span></li>' +
        '            <li class="list-group-item forthrowlist ">Agoda<br>$ 575</li>' +
        '            <li class="list-group-item forthrowlist">Travelocity<br>$ 708</li>' +
        '            <li class="list-group-item forthrowlist">' +
        '                <hr> ' +
        '            </li> ' +
        '            <li class="list-group-item forthrowlist"><b>More Deals from<br>$ 575</b><i' +
        '                    class="fas fa-chevron-down colorblack"></i></li>' +
        '        </center>'

        +
        '    </ul>' +
        '    </span>'

        +
        '</div>' +
        '<div class="col-sm  col-border borderless customborder">' +
        '    <ul class="list-group ">' +
        '        <li class="list-group-item forthrowlist"><span class="middle-align " id="colorred"></span></li>' +
        '        <li class="list-group-item forthrowlist">' +
        '            <span class="middle-align-less colorgreen">Hotel Website</span></li>' +
        '        <li class="list-group-item forthrowlist"><span class="middle-align-more-more colorgreen"' +
        '                id="colorgreen"><b id="forthrowhotel2">' + hotel.price + "  $" + '</b></span></li>' +
        '        <li class="list-group-item forthrowlist colorgreen"><span class="">' + "3 nights for " + '<span id="colorgreen">' + "$" + "<b>" + hotel.price * 3 + "</b>" + "</span>" +
        '             </span></li>' +
        '         <li class="list-group-item forthrowlist"><span class="middle-align-more colorgreen "></span></li>'


        +
        '        <li class="list-group-item forthrowlist"><span class="borderbreakfast"><span' +
        '                    class="middle-align-less " id="colorgreen">Free breakfast</span></span></li>' +
        '        <li class="list-group-item forthrowlist"> <button class="btn btn-secondary btn-green  btn-block">View Deal <svg aria-hidden="true"' +
        '                    focusable="false" data-prefix="fas" data-icon="greater-than" role="img"' +
        '                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""class="svg-inline--fa fa-greater-than fa-w-12 arrowViewDeal" style="margin-left: 0px;">' +
        '                    <path fill="currentColor"  d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z">' +
        '                    </path>' +
        '                </svg>' +
        '            </button>' +
        '        </li>' +
        '    </ul>'

        +
        '</div>' +
        '</div>' +

        '<div class="modal" id="myModal">' +
        ' <div class="modal-dialog">' +
        '      <div class="modal-content">' +

        '          <!-- Modal Header -->' +
        '            <div class="modal-header">' +
        '                <h4 class="modal-title">Map</h4>' +
        '                <button type="button" class="close" data-dismiss="modal">&times;</button>' +
        '            </div>' +

        '            <!-- Modal body -->' +
        '            <div class="modal-body">' +
        '                 <iframe id="map"' +
        '                     src="' + hotel.mapurl + '"width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' +
        '            </div>' +

        '            <!-- Modal footer -->' +
        '            <div class="modal-footer">' +
        '                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
        '            </div>' +

        '        </div>' +
        '    </div>' +
        '</div>'
    )
}

// Function for producing stars
function stargenerator(num) {
    calc = "";
    for (var i = 0; i < num; i++) {
        calc += " ★"
    }
    return calc;
}
// Autocomplete function
$("#search").autocomplete({
    source: cities
});


// Display num for slider range
$(document).on('input', '#slider', function () {
    $('#slider_value').html($(this).val());
});



fetch("./data.json")
    .then(res => res.json())
    .then(data => {

        var hotelsoriginal = [];

        // Show all hotels
        for (const hotel of data[1]['entries']) {
            hotelsoriginal.push(hotel);

            $(hotelgenerator(hotel)).appendTo(".container");
        }


        // Populate Cities 
        for (let i = 0; i <= data.length; i++) {

            option = document.createElement('option');
            option.text = data[1]["entries"][i].city;
            option.value = data[1]["entries"][i].city;
            locationdropdown.add(option);

            cities.push(data[1]["entries"][i].city);
        }

        //On price change
        $(document).on('input change', '#customRange', function () {
            $('.HotelRow').remove(); // Remove Hotels

            // Change all selectors to Default
            document.getElementById("selectstars").selectedIndex = 0;
            document.getElementById("location-dropdown").selectedIndex = 0;
            document.getElementById("rateselect").selectedIndex = 0;
            document.getElementById("morefilters").selectedIndex = 0;


            $('#input').val(""); // Erase input text


            // Change format of Price Range
            var nf = new Intl.NumberFormat();
            document.getElementById('priceRange').innerHTML = "Max. " + nf.format($(this).val());

            // Filter via Price
            const hotels = hotelsoriginal.filter(hotel => hotel.price < $(this).val());

            //Show Filtered Hotels
            for (const hotel of hotels) {
                console.log(hotel);
                $(hotelgenerator(hotel)).appendTo(".container");

            }

        });

        //On stars change

        $('#selectstars').on('change', function () {

            // Change all selectors to Default

            $('.HotelRow').remove();
            $('#input').val("");
            document.getElementById("location-dropdown").selectedIndex = 0;
            document.getElementById("rateselect").selectedIndex = 0;
            document.getElementById("morefilters").selectedIndex = 0;

            $('#customRange').val("2800");
            $('#priceRange').html(" Max 2,800");

            //Filter hotels via rating
            const hotels = hotelsoriginal.filter(hotel => hotel.rating == $(this).val());


            //Show All Hotels

            if ($(this).val() == "All") {
                for (const hotel of hotelsoriginal) {
                    $(hotelgenerator(hotel)).appendTo(".container");
                }
            } else {
                //Show Filtered Hotels

                for (const hotel of hotels) {
                    $(hotelgenerator(hotel)).appendTo(".container");

                }
            }
        });

        $('#rateselect').on('change', function () {

            // Change all selectors to Default

            $('.HotelRow').remove();
            $('#input').val("");
            $('#customRange').val("2800");
            $('#priceRange').html(" Max 2,800");

            document.getElementById("selectstars").selectedIndex = 0;
            document.getElementById("location-dropdown").selectedIndex = 0;
            document.getElementById("morefilters").selectedIndex = 0;


            // Split Rates from the selected value
            var res = $(this).val().split("-");

            //Filter hotel by rating
            const hotels = hotelsoriginal.filter(hotel => (hotel.ratings.no < res[1] && hotel.ratings.no > res[0]));

            //Show All Hotels

            if ($(this).val() == "All") {
                for (const hotel of hotelsoriginal) {
                    $(hotelgenerator(hotel)).appendTo(".container");
                }
            } else {
                //Show Filtered Hotels
                for (const hotel of hotels) {
                    $(hotelgenerator(hotel)).appendTo(".container");

                }
            }



        });

        $('#location-dropdown').on('change', function () {

            // Change all selectors to Default

            $('.HotelRow').remove();
            $('#input').val("");
            document.getElementById("selectstars").selectedIndex = 0;
            document.getElementById("rateselect").selectedIndex = 0;
            document.getElementById("morefilters").selectedIndex = 0;

            $('#customRange').val("2800");
            $('#priceRange').html(" Max 2,800");

            //Filter hotel by location

            const hotels = hotelsoriginal.filter(hotel => hotel.city == $(this).val());

            //Show All Hotels

            if ($(this).val() == "All") {
                for (const hotel of hotelsoriginal) {
                    $(hotelgenerator(hotel)).appendTo(".container");
                }
            } else {
                //Show Filtered Hotels

                for (const hotel of hotels) {
                    $(hotelgenerator(hotel)).appendTo(".container");
                }
            }

        });

        $('#morefilters').on('change', function () {

            // Change all selectors to Default

            $('.HotelRow').remove();
            $('#input').val("");
            document.getElementById("selectstars").selectedIndex = 0;
            document.getElementById("rateselect").selectedIndex = 0;
            document.getElementById("location-dropdown").selectedIndex = 0;


            $('#customRange').val("2800");
            $('#priceRange').html(" Max 2,800");


            //Show All Hotels

            if ($(this).val() == "All") {
                for (const hotel of hotelsoriginal) {
                    $(hotelgenerator(hotel)).appendTo(".container");
                }
            } else {
                //Show Filtered Hotels

                hotelsfilternew = []
                for (const hotelyou of hotelsoriginal) {
                    //Filter Hotels by filter
                    for (const hotel of hotelyou['filters']) {
                        if (hotel.name.includes($(this).val())) {
                            hotelsfilternew.push(hotelyou)
                        }
                    }
                }
                for (const hotel of hotelsfilternew) {
                    $(hotelgenerator(hotel)).appendTo(".container");
                }
            }

        });


        $("#searchButton").click(function () {
            // Change all selectors to Default

            $('.HotelRow').remove();
            $('#input').val("");
            document.getElementById("rateselect").selectedIndex = 0;
            document.getElementById("selectstars").selectedIndex = 0;
            document.getElementById("morefilters").selectedIndex = 0;

            $('#customRange').val("2800");
            $('#priceRange').html(" Max 2,800");

            // Filter Hotels by search string

            var searchstring = document.getElementById("search").value;
            const hotels = hotelsoriginal.filter(hotel => hotel.city.toLowerCase().includes(searchstring.toLowerCase()));

            //Show hotels
            for (const hotel of hotels) {
                console.log(hotel);
                $(hotelgenerator(hotel)).appendTo(".container");
            }

        });



    });
