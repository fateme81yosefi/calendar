const d = new Date();
m = d.getMonth()
y = d.getFullYear()
dd = d.getDate()
w=d.getDay()
console.log( y+"/"+ (m + 1) +"/"+dd)
console.log(w+1)


function calculator(day,month,weekday){
    // weekday = #column 
    if(day <=7 || ){
        row = 1
    }else if(day <=14){
        row = 2
    }else if(day <= 21){
        row = 3
    }else if(day <= 28){
        row = 4
    }
}