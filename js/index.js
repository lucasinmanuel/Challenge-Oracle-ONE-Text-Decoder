let cryptographyBtn = document.querySelectorAll(".btn-wrapper button")[0];
let decryptionBtn = document.querySelectorAll(".btn-wrapper button")[1];

let textareaContent = document.getElementsByTagName("textarea");
let showInfo = document.getElementById("show-info");

let copyConfirmer = document.getElementById("copy-confirmer");

cryptographyBtn.addEventListener("click",()=>{
    showInfo.innerHTML = `
        <p id="generated-content">${cryptography(true,textareaContent[0].value)}</p>
        <button id="copy-btn">Copiar</button>
    `;
    showInfo.style.justifyContent = "space-between";
    showInfo.style.textAlign = "left";
    enableCopyBtn();
});

decryptionBtn.addEventListener("click",()=>{
    showInfo.innerHTML = `
        <p id="generated-content">${cryptography(false,textareaContent[0].value)}</p>
        <button id="copy-btn">Copiar</button>
    `;
    showInfo.style.justifyContent = "space-between";
    showInfo.style.textAlign = "left";
    enableCopyBtn();
});

function cryptography(cripOrDecry,text){
    let result = text;
    if(cripOrDecry){
        result = result.replaceAll("e","enter");
        result = result.replaceAll("i","imes");
        result = result.replaceAll("a","ai");
        result = result.replaceAll("o","ober");
        result = result.replaceAll("u","ufat");
    }else{
        result = result.replaceAll("enter","e");
        result = result.replaceAll("imes","i");
        result = result.replaceAll("ai","a");
        result = result.replaceAll("ober","o");
        result = result.replaceAll("ufat","u");
    }
    return result;
}

function enableCopyBtn(){
    let generatedContent = document.getElementById("generated-content");
    let copyBtn = document.getElementById("copy-btn");  
    copyBtn.addEventListener("click",()=>{
        navigator.clipboard.writeText(generatedContent.innerText);
        alert("Texto copiado com sucesso!");
    });
}