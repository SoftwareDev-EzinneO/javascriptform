function showModal() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (firstName === "" || lastName === "") {
        alert("please enter your name");
        
        return;
    }

    document.getElementById("welcomeText").textContent = "Welcome, " + firstName + "" + lastName;

    document.getElementById("overlay").style.display ="flex";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none"
}