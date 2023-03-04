function dayinfo(){
    var thatday = new Date("2023-03-02")
    var today = new Date(); 

    var diff = today-thatday;
    var dday = Math.floor(diff / (1000*60*60*24)+1);
    if (dday>0)
    {
        var ddaystr = "D+" + (dday-1).toString();
    }
    else if (dday == 0)
    {
        var ddatstr = "D-day";
    }
    else
    {
        var ddaystr = "D" + dday.toString();
    }
    
    document.getElementById("dday").innerHTML = ddaystr;
    document.getElementById("info").innerHTML = "개강";
}
dayinfo();