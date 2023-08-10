function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(() => {
        document.getElementById("alert-danger").classList.remove("show");
    }, 2000);
}
const regBtn = document.getElementById("regBtn");
regBtn.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let passwd1 = document.getElementById("password1").value;
    let passwd2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;
    if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === ""
        || passwd2 !== passwd1 || passwd1.length < 6 || terminos == false) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});
1234567




regBtn.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let pw1 = document.getElementById('password1').value;
    let pw2 = document.getElementById('password2').value;
    let terminos = document.getElementById('terminos').checked;
    const regBtn = document.getElementById('regBtn')
    if (nombre.trim() === '' || apellido.trim() === '' || pw1.trim() === '' || pw1 !== pw2 || pw1.length < 6 || terminos === false) {
        showAlertError()
    } else { showAlertSuccess() }
})