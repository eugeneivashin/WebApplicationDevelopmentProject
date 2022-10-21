function editProfile(){
    document.getElementById("gender").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("username").style.display = "none";
    document.getElementById("dob").style.display = "none";
    document.getElementById("genderEdit").style.display = "block";
    document.getElementById("emailEdit").style.display = "block";
    document.getElementById("usernameEdit").style.display = "block";
    document.getElementById("dobEdit").style.display = "block";
    document.getElementById("editBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "block";
    document.getElementById("cancelBtn").style.display = "block";
}

function cancelEdit(){
    document.getElementById("gender").style.display = "block";
    document.getElementById("email").style.display = "block";
    document.getElementById("username").style.display = "block";
    document.getElementById("dob").style.display = "block";
    document.getElementById("editBtn").style.display = "block";

    document.getElementById("genderEdit").style.display = "none";
    document.getElementById("emailEdit").style.display = "none";
    document.getElementById("usernameEdit").style.display = "none";
    document.getElementById("dobEdit").style.display = "none";
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("cancelBtn").style.display = "none";
}