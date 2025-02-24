const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#cpwd");
const confirmPwdBlock = document.querySelector("div:has(> #cpwd)");
const errorText = document.querySelector(".error");

confirmPwdBlock.addEventListener("input", (e) => {
    if (confirmPwd.value != pwd.value) {
        errorText.style.visibility = "visible";
    } else {
        errorText.style.visibility = "hidden";
    }
});