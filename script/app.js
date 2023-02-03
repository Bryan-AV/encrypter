const encriptador_txt = document.querySelector("#encriptador_txt");
const encryptedMessage = document.querySelector(".encryptedMessage");
const messageNotFound = document.querySelector(".messageNotFound");
const encryptedTitle = document.querySelector(".encryptedTitle");


function encryptBtn(){
   
    if(encriptador_txt.innerText === ''){
        messageNotFound.style.display = "block";
        return;
    }
    const messageToEncrypt = encrypt(encriptador_txt.innerText);
    encryptedMessage.innerText = messageToEncrypt;
    messageNotFound.style.display = "none";
    encriptador_txt.innerText = '';
    encryptedTitle.style.display = "block";

}

function encrypt (stringEncryped) {
    let code = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncryped = stringEncryped.toLowerCase();

    for(let i = 0; i < code.length; i++){
        if (stringEncryped.includes(code[i][0])){
            stringEncryped = stringEncryped.replaceAll(code[i][0], code[i][1]);
        }
    }
    return stringEncryped;
}

function decrypt (stringDecryped) {
    let code = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDecryped = stringDecryped.toLowerCase();

    for(let i = 0; i < code.length; i++){
        if (stringDecryped.includes(code[i][1])){
            stringDecryped = stringDecryped.replaceAll(code[i][1], code[i][0]);
        }
    }
    return stringDecryped;
}

function decryptBtn(){
   
    if(encriptador_txt.innerText === ''){
        messageNotFound.style.display = "block";
        return;
    }
    const messageToEncrypt = decrypt(encriptador_txt.innerText);
    encryptedMessage.innerText = messageToEncrypt;
    messageNotFound.style.display = "none";
    encriptador_txt.innerText = '';
    encryptedTitle.style.display = "block";

}

function copyText(){
    navigator.clipboard.writeText(encryptedMessage.innerText);
}