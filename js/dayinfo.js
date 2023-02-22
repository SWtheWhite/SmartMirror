function dayinfo(){
    var thatday = new Date("2023-03-02")
    var today = new Date(); 

    var diff = today-thatday;
    var dday = Math.floor(diff / (1000*60*60*24)+1);
    
    document.getElementById("dday").innerHTML = dday;
    document.getElementById("info").innerHTML = "개강";
}
dayinfo();
window.onload = function(){
    dayinfo();
    setInterval(dayinfo,1000); //1마다 Refresh
}
