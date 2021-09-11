const fct = () => {
    const inputBox = document.querySelector(".form input");
    const errorText = document.querySelector(".error-text");

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(inputBox.value).toLowerCase()) === true) {
        errorText.style.display = "none";
        inputBox.style.borderColor = "hsl(0, 0%, 59%)";
    }
    else {
        errorText.style.display = "block";
        inputBox.style.borderColor = "hsl(354, 100%, 66%)";
    }
}