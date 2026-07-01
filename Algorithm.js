function generatePassword (length){
    const chars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        chars[randomIndex];
        password += chars[randomIndex]
    }
    return password;
}

const lengthInput =
    document.getElementById("length");

const generateBtn =
    document.getElementById("generate-btn");

const passwordOutput =
    document.getElementById("password-output");

    generateBtn.addEventListener("click", function(){

    const length = Number(lengthInput.value);

    const password =
        generatePassword(length);

    passwordOutput.textContent = password;

});

    const copyBtn = document.getElementById("copy-btn");


    copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(passwordOutput.textContent);

    copyBtn.textContent = "Copied!";
});

setTimeout(function(){
    copyBtn.textContent = "Copy";
}, 2000);