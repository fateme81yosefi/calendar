const d = new Date();
m = d.getMonth()
y = d.getFullYear()
dd = d.getDate()
w=d.getDay()
console.log( y+"/"+ (m + 1) +"/"+dd)
console.log(w+1)


function calculator(day,month,weekday){
    // weekday = #column 
    if(day <=7 || day>=29){
        row = 1
        x="1-"+weekday
        document.getElementById(x).innerHTML = day
    }else if(day <=14){
        row = 2
        x="2-"+weekday
        document.getElementById(x).innerHTML = day
    }else if(day <= 21){
        row = 3
        x="3-"+weekday
        document.getElementById(x).innerHTML = day
    }else if(day <= 28){
        row = 4
        x="4-"+weekday
        document.getElementById(x).innerHTML = day
    }


}