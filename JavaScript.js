document.getElementById("NewArt").style.display = "none";

function NewArt() {
    document.getElementById("emp").style.display = "none";
    document.getElementById("NewArt").style.display = "block";
    
}
function NWArt() {
    
    var myDiv = document.createElement("div");

    var title = document.getElementById("Name").value
    var cont = document.getElementById("cont").value

    if (title.length > 0) {
        myDiv.id = 'div_id';


        myDiv.innerHTML = "<h1>" + title + "</h1> <br> <p>" + cont+"</p>";


        document.body.appendChild(myDiv);
        document.getElementById("NewArt").style.display = "none";

    } else {

        alert("The title cannot be empty")
    }
  
}