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

function findFirstDayMonth(m, y) {
    const date = new Date(y + "-" + m + "-" + 1)
    console.log(date.getDay())

    return date.getDay()
}



function calcDayCount(m) {
    console.log("calcDayCount")
    switch (m + 1) {
        case 1: return 31;
        case 2: return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }
}

function fillAllDay(m, y, dayCount) {

    m++


    var fd = findFirstDayMonth(m, y);
    fd++

    row == 1
    col == fd

    for (let i = 1; i <= dayCount; i++) {
        x = row + "-" + col;
        document.getElementById(x).innerHTML = i;
        if(col>=8){
            
        }

        if (row >= 5) {
            row = 1
        }

    }

}

dayCount = calcDayCount(m + 1)

fillAllDay(m, y, dayCount)
setMonth(m)
setYear(y)
