function open_exe(){
    user_name = document.getElementById("InPuT").value;
    localStorage.setItem("Kwitter username", user_name); 
    window.location = "kwitter_room.html";
} 