x = 0
timer = -1
let cps
let result

function instant(fn,delay){
    fn()
    return setInterval(fn,delay)
}




document.getElementById("clicker").onclick = function(){
    x = x + 1
    document.getElementById("counter").innerHTML = x}




function game(){
document.getElementById("cover").onclick = function(){
    var seconds = instant(timd,1000)

function timd(){
    document.getElementById("cover").style.display = "none"
    timer = timer + 1
    document.getElementById("clicker").innerHTML = "Time: " + timer + "s"
    if(timer >= 10){
        clearInterval(seconds)
        let date = new Date()
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        cps = x / 10
        result = cps
        document.getElementById("cover").style.display = "flex"
        document.getElementById("cover").innerHTML = "Time's up!"
        document.getElementById("result").style.animationName = "slideRight"
        if(cps<=0){document.getElementById("result").innerHTML = "Your CPS is: " + cps + "! Did you even try? "}
        else if(cps>=6){        document.getElementById("result").innerHTML = "Your CPS is: " + cps + "! Great job! You click faster than an average human! "}
        else{        document.getElementById("result").innerHTML = "Your CPS is: " + cps + "! Not too bad."}
        document.getElementById("history").innerHTML += cps + " cps" + " - " + time + "<br/>"
}

}

}
}


document.getElementById("restartButton").onclick = function(){
    cps = 0
    timer = -1
    x = 0
    document.getElementById("result").style.animationName = "slide"
    document.getElementById("counter").innerHTML = x
    document.getElementById("result").innerHTML = ""
    document.getElementById("cover").innerHTML = "Press here to start the test."


};game()