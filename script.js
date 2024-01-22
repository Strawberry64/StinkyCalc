window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let stinkyName = document.getElementById("stinky-name").value;

    if(yourName != "" && stinkyName != ""){
        let percentage = Math.floor(Math.random() * (100))
        document.getElementById("result-message").innerText = yourName + " and " + stinkyName + "'s chance of stinky:"
        document.getElementById("result-percentage").innerText = percentage.toString() + "%"
    }
}