var submt = document.getElementById("submt");
var pass = document.getElementById("pass");

//on submt click
submt.onclick = function(){
    //if password is correct
    if(pass.value == "o21zlap2"){
        //open level2
        window.location.href = "level2.html";
    }
}