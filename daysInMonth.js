function daysOfMonth(month,year){

    let days = new Date(year,month,0).getDate();
    console.log(days);
    
}
daysOfMonth(1, 2012);