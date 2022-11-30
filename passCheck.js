function checkPasswords() {
    let pass = document.getElementById("password");
    let passConfirm = document.getElementById("password_confirm");
    let errorSlot = document.getElementById("error");
    if (pass.value != passConfirm.value) {
        errorSlot.innerText = "* The passwords do not match!";
        document.querySelector("#button").disabled = true;
        errorSlot.style.color = "yellow"
    } else {
        errorSlot.innerText = "✓ The passwords match."
        document.querySelector("#button").disabled = false;
        errorSlot.style.color = "green"
    }
}