
$(document).ready(function(){
    current_color = "black"; // default color
    const colors = ["black", "blue", "green"];

    /**
     * Changes the color of al elements <h2>.
     * 
     * Color changes sequentially from black, to blue, to green every one second.
     * 
     * @listens For one second interval.
     */
    function change_color() {       
        // a scalable way 
        $.each(colors, function(i, color) {
            if (current_color == color) {
                if (i != colors.length - 1) {
                    $("h2").css("color", colors[i + 1]);
                    current_color = colors[i + 1];
                    return false; // once the color has been changed, stop iterating
                } else {
                    $("h2").css("color", colors[0]);
                    current_color = colors[0];
                    return false; // once the color has been changed, stop iterating
                }
            }
        });

        // not a scalable way
        // switch(current_color) {
        //     case "black":
        //         current_color = "blue"
        //         break;
        //     case "blue":
        //         current_color = "green"
        //         break;
        //     case "green":
        //         current_color = "black"
        //         break;
        // }
        // $("h2").css("color", current_color);
    }

    setInterval(change_color, 1000);
});
  