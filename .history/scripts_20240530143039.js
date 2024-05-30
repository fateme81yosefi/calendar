const d = new Date();
m = d.getMonth()
y = d.getFullYear()
day = d.getDate()
weekday = d.getDay()
weekday++


function setYear(y) {
    document.getElementById("year").innerHTML = y
}

function setMonth(m) {
    switch (m + 1) {
        case 1: month = "January";
            break;
        case 2: month = "February";
            break;
        case 3: month = "March";
            break;
        case 4: month = "April";
            break;
        case 5: month = "May";
            break;
        case 6: month = "June";
            break;
        case 7: month = "July";
            break;
        case 8: month = "August";
            break;
        case 9: month = "September";
            break;
        case 10: month = "October";
            break;
        case 11: month = "November";
            break;
        case 12: month = "December";
            break;
    }
    document.getElementById("month").innerHTML = month

}

function setCurrentDay(weekday , day) {
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


function calcDa(params) {
    
}
function fillAllDay(m) {



}

calculator(m, y, day, weekday)