const x = [500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500]
timer = 0
forResult = 0
let reactionTime
let result

function instant(fn,delay){
    fn()
    return setInterval(fn,delay)
}

game()

function game(){
document.getElementById("cover").onclick = function(){
    var seconds = instant(timd,100)
function timd(){
    document.getElementById("cover").style.display = "none"
    document.getElementById("board").style.display = "inline-block"
    var i = x[Math.floor(Math.random()*x.length)]
    timer += 100
    if(timer >= i){
        clearInterval(seconds)
        document.getElementById("board").style.display = "none"
        document.getElementById("click").style.display = "flex"
        let date1 = new Date()
        time_now = date1.getTime()
        
       
}

}

};gamelast()
function gamelast(){
    document.getElementById("click").onclick = function(){
        document.getElementById("cover").style.display = "flex"
        document.getElementById("click").style.display = "none"
        let date2 = new Date()
        time_later = date2.getTime()
        play_time = (time_later - time_now)
        document.getElementById("cover").innerHTML = "Result: " + play_time + "ms. <br>" + "Click to try again"
        let date = new Date()
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        document.getElementById("history").innerHTML += play_time + " ms" + " - " + time + "<br/>" 
        timer = 0
        game()

        }
    }
}






