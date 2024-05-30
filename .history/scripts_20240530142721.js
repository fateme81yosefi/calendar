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

function set(params) {
    
}


function calculator(m, y, day, weekday) {



}

calculator(m, y, day, weekday)