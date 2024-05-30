const d = new Date();
m = d.getMonth()
y = d.getFullYear()
day = d.getDate()
weekday = d.getDay()
weekday++


function setYear(y) {
    document.getElementById("year").innerHTML = y
}
function srtMonth(m){

}
function fill(m) {

    switch (m + 1) {
        case 1: b = "January";
            for (let first = 1; first < 31; first++) {

            }
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

}


function calculator(m, y, day, weekday) {





    // weekday = #column 
    if (day <= 7) {
        x = "1-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day <= 14) {
        x = "2-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day <= 21) {
        x = "3-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day <= 28) {
        x = "4-" + weekday
        document.getElementById(x).innerHTML = day
    } else if (day >= 29) {
        x = "5-" + weekday
        document.getElementById(x).innerHTML = day
    }


}

calculator(m, y, day, weekday)