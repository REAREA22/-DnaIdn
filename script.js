function copyRek(){
    let rek = document.getElementById("rek").innerText;
    navigator.clipboard.writeText(rek);
    document.getElementById("status").innerText = "✔ Rekening disalin";
}

function goNext(){
    let status = document.getElementById("status");
    status.innerText = "⏳ Memproses pembayaran...";

    setTimeout(()=>{
        window.location.href = "success.html";
    },1500);
}
