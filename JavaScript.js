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


        myDiv.innerHTML = "<h2 style=" + "background-color:Grey;" + ">" + title + "</h2> <small style=" + "background-color:Grey;" + "> Published on: " + dateTime + "</small><br> <p style=" + "background-color:Grey;" + ">" + cont + "</p>   <button type=" + "button" + " onclick=" + "NewArt()"+">Click here to create new Article</button>";


        document.body.appendChild(myDiv);
        document.getElementById("NewArt").style.display = "none";

    } else {

        alert("The title cannot be empty")
    }
  
}