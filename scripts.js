const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#cpwd");
const confirmPwdBlock = document.querySelector("div:has(> #cpwd)");
const errorText = document.querySelector(".error");
const inputList = document.querySelectorAll(".data input");
const infoHeader = document.querySelector(".header");
const companyTitle = document.querySelector(".company-title");

/* Align the companyTitle with the infoHeader */
const height = companyTitle.getBoundingClientRect().height;
const offset = infoHeader.getBoundingClientRect().height;
companyTitle.style.marginTop = offset-height+"px";

/* Buttons are only marked as invalid once interacted with*/
inputList.forEach(input => {
    input.addEventListener("input", () => {
        input.classList.add("invalid");
    });
});

/* Lets users know if passwords match*/
confirmPwdBlock.addEventListener("input", (e) => {
    if (confirmPwd.value != pwd.value) {
        errorText.style.visibility = "visible";
    } else {
        errorText.style.visibility = "hidden";
    }
});