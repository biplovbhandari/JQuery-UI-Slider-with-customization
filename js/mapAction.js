$(document).ready(function() {

    var tooltip = $('<div id="toolTipSlider" />');

    var year = "BS 207";

    var arrayYear = [1, 2, 3, 4, 5];

    var capacityYear = {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500
    };

    $('#slider').slider({
        min: 1,
        max: 5,
        slide: function(event, ui) {
            if ($.inArray(ui.value, arrayYear)) {
                tooltip.text(year + ui.value);
                $('.numberCircle').text(capacityYear[ui.value]);
            } else {
                tooltip.text("BS 2071");
                $('.numberCircle').text(capacityYear[1]);
            }
        }
    }).find(".ui-slider-handle").append(tooltip).hover(function() {
        tooltip.show();
    });

    tooltip.text("BS 2071");
    $('.numberCircle').text(capacityYear[1]);
});