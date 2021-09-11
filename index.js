let toggleOn = false;

const fct = () => {
    const inputBox = document.querySelector(".form input");
    const errorText = document.querySelector(".error-text");
    const errorTextMobile = document.querySelector(".error-text-mobile");

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(document.body.offsetWidth > 730) {
        if (re.test(String(inputBox.value).toLowerCase()) === true) {
            errorText.style.display = "none";
            inputBox.style.borderColor = "hsl(0, 0%, 59%)";
            toggleOn = false;
        }
        else {
            errorText.style.display = "block";
            inputBox.style.borderColor = "hsl(354, 100%, 66%)";
            toggleOn = true;
        }
    }
    else {
        if (re.test(String(inputBox.value).toLowerCase()) === true) {
            errorTextMobile.style.display = "none";
            inputBox.style.borderColor = "hsl(0, 0%, 59%)";
            toggleOn = false;
        }
        else {
            errorTextMobile.style.display = "block";
            inputBox.style.borderColor = "hsl(354, 100%, 66%)";
            toggleOn = true;
        }
    }
}

const toggleErrorMessages = () => {
    const errorText = document.querySelector(".error-text");
    const errorTextMobile = document.querySelector(".error-text-mobile");
    
    if(document.body.offsetWidth > 730 && toggleOn === true) {
        errorText.style.display = "block";
        errorTextMobile.style.display = "none";
        console.log("salut");
    }
    if(document.body.offsetWidth < 730 && toggleOn === true) {
        errorText.style.display = "none";
        errorTextMobile.style.display = "block";
        console.log("pa");
    }
}