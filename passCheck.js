function checkPasswords(form) {
    console.log("Here");
    let pass = form.password.value;
    let passConfirm = form.password_confirm.value;
    let errorSlot = document.getElementById("error");
    console.log(pass);
    console.log(passConfirm);
    if (pass != passConfirm) {
        console.log("here 3");
        errorSlot.innerText = "* The passwords do not match!";
        document.querySelector("#button").disabled = true;
    } else {
        document.querySelector("#button").disabled = false;
    }
}