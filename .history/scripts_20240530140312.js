



function calculator() {
    const d = new Date();
    m = d.getMonth()
    y = d.getFullYear()
    day = d.getDate()


    document.d

    switch(m+1){
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June"; 
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
        }

    document.getElementById("month").innerHTML = b

    // weekday = #column 
    if (day <= 7 || day >= 29) {
        row = 1
        x = "1-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day <= 14) {
        row = 2
        x = "2-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day <= 21) {
        row = 3
        x = "3-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day <= 28) {
        row = 4
        x = "4-" + weekday
        document.getElementById(x).innerHTML = day
    }


}

calculator()