// var today =new Date();
// var hourNow = today.getHours();
// var greeting;
// if (hourNow > 18){
//     greeting = 'good evening!';}
// else if (hourNow >12){greeting = 'good afternoon!';} 
//  else if(hourNow> 0){greeting = 'good morning!';}
//  else{greeting = 'Welcome!';}  
//  document.write('<h3>' + greeting + '</h3>')

function theTime(){

    // var today =new Date();
    var hourNow = prompt("enter the time 0-24")
    var greeting;
    if (hourNow > 18 && hourNow<=24){
        greeting = 'good evening!';}
    else if (hourNow >12 && hourNow<=18){greeting = 'good afternoon!';} 
     else if(hourNow> 0&& hourNow<=12){greeting = 'good morning!';}
     else{greeting = 'Welcome!';} 
     return greeting; 
     }

document.write('<h3>' + theTime() + '</h3>')
     