const btn = document.querySelector("#btn");
const qrCode = document.querySelector("#qr-code");
const input = document.querySelector("#form-container input") 
const qrImg = document.querySelector("#qr-code img")

function generateQRCode(){
    const inputValue =input.value;
    if(!inputValue) return;
    btn.setAttribute("value", "Gerando QR Code...");
    qrImg.setAttribute("src", ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`)

    qrImg.addEventListener("load",()=>{
        qrCode.style.display = "flex";
        btn.setAttribute("value", "QR Code Gerado!")
    })    
}

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    /*btn.setAttribute("value", "Gerando QR Code...")
    qrCode.style.display = "flex";
    btn.setAttribute("value", "QR Code Gerado!")*/
    generateQRCode();
});