
console.log(y + "/" + (m + 1) + "/" + dd)
console.log(w + 1)


function calculator() {
    const d = new Date();
    m = d.getMonth()
    y = d.getFullYear()
    day = d.getDate()
    weekday = d.getDay()
    weekday++


    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      
    document.getElementById("month") 
    
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