function cal(){
    var yr = prompt("Enter your birth year:")
    var calcu = (2021 - yr) * 365
    var h1 = document.createElement("h1")
    var textans = document.createTextNode("You are "+calcu+" days old")
    h1.setAttribute("id", "calcu")
    h1.appendChild(textans)
    document.getElementById("rlt").appendChild(h1)

}
function reset(){
    document.getElementById("calcu").remove()
}
