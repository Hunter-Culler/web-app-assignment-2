function updateSecurityView() {
    var dlSecurity = document.getElementById("dlSecurity");
    var divSecurityAnswer = document.getElementById("divSecurityAnswer");

    if (dlSecurity.value != "starter") {
        divSecurityAnswer.classList.remove("invisible");
    }
    else {
        divSecurityAnswer.classList.add("invisible");
    }
}