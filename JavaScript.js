document.getElementById("NewArt").style.display = "none";

function NewArt() {
    document.getElementById("emp").style.display = "none";
    document.getElementById("NewArt").style.display = "block";
    
}
function NWArt() {
 
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var myDiv = document.createElement("div");

    var title = document.getElementById("Name").value
    var cont = document.getElementById("cont").value

    if (title.length > 0) {
        myDiv.id = 'div_id';

        
        myDiv.innerHTML = "<h2 style=" + "background-color:lightgrey; padding: 20px; margin-top:0px; margin-bottom:1px;" + ">" + title + "</h2> <small style=" + "background-color:lightgrey; padding: 20px; margin-top:0px; margin-bottom:1px;" + "> Published on: " + dateTime + "</small><br> <p style=" + "background-color:lightgrey;" + " padding: 20px; margin-top:0px; margin-bottom:1px;>" + cont + "</p> <br>  <button type=" + "button" + " onclick=" + "NewArt()" +">Click here to create new Article</button>  <br> <hr><br><br><br> ";


        document.body.appendChild(myDiv);
        document.getElementById("NewArt").style.display = "none";

    } else {

        alert("The title cannot be empty")
    }
  
}