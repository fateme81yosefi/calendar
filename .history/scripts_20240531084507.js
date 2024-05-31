const d = new Date();
m = d.getMonth()
m++
y = d.getFullYear()
day = d.getDate()
weekday = d.getDay()
weekday++

const eventt=[]

function getMonth() {
    m = document.getElementById("month").innerHTML
    month = monthNameToNum(m)
    return month
}

function getYear() {
    year = parseInt(document.getElementById("year").innerHTML)
    return year
}

function increaseMonth() {

    month = getMonth()

    month++
    if (month > 12) {
        incYear()
        setMonth(1)

    }
    else {
        fillAllDay(month, y)
        setMonth(month)
    }
}

function dec() {
    month = getMonth()
    month--
    if (month < 1) {
        decYear()
        setMonth(12)
    } else {
        fillAllDay(month, y)
        setMonth(month)
    }

}

function incYear() {
    let yy = getYear()
    yy++;
    document.getElementById("year").innerHTML = yy;
    setYear(yy)
    fillAllDay(m, yy)
}

function decYear() {
    let yy = getYear()
    yy--;
    document.getElementById("year").innerHTML = yy;
    setYear(yy)
    fillAllDay(m, yy)
}

function setYear(y) {
    document.getElementById("year").innerHTML = y
}

function monthNameToNum(m) {
    switch (m) {
        case "January": return 1;
        case "February": return 2;
        case "March": return 3;
        case "April": return 4;
        case "May": return 5;
        case "June": return 6;
        case "July": return 7;
        case "August": return 8;
        case "September": return 9;
        case "October": return 10;
        case "November": return 11;
        case "December": return 12;
    }
}

function setMonth(m) {
    switch (m) {
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
    return date.getDay()
}

function calcDayCount(m) {
    switch (m) {
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

function fillAllDay(m, y) {

    dayCount = calcDayCount(m)


    var fd = findFirstDayMonth(m, y);
    fd++;

    let row = 1
    let col = fd
    for (let i = 1; i < col; i++) {
        const x = row + "-" + i;
        document.getElementById(x).innerHTML = ""
    }
    for (let i = 1; i <= dayCount; i++) {
        const x = row + "-" + col;
        document.getElementById(x).style.backgroundColor = "white"

        month = d.getMonth()
        month++
        console.log(y == d.getFullYear())
        if (day == i && m == month && y == d.getFullYear()) {
            document.getElementById(x).style.backgroundColor = "DodgerBlue"
        }

        document.getElementById(x).innerHTML = i;
        if (col >= 7) {
            col = 1;
            row++;
        } else {
            col++;
        }
        if (row >= 6) {
            row = 1;
        }
    }

    for (let i = col; i <= 7; i++) {
        if (row == 5) {
            const x = row + "-" + i;
            document.getElementById(x).innerHTML = ""
        }
    }
}

function newEvent() {
    document.getElementById("new-event").style.display = "flex"
}

function setEventDate(id) {
    return (document.getElementById("" + id).innerHTML)
}

function addEvent() {
    eventt.push({title:document.getElementById("title").innerHTML,
                description:document.getElementById("desc").innerHTML,
                time:document.getElementById("time").innerHTML ,
                date:document.getElementById("date").innerHTML,
                color:document.getElementById("color").innerHTML })

    console.log(eventt)
}
setMonth(m)
setYear(y)
fillAllDay(m, y)
