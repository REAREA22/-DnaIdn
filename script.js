function copyRek(){
    let rek = document.getElementById("rek").innerText;
    navigator.clipboard.writeText(rek);
    document.getElementById("status").innerText = "✔ Rekening disalin";
}

function pay(){
    let status = document.getElementById("status");
    status.innerText = "⏳ Memproses pembayaran...";

    setTimeout(()=>{
        status.innerText = "✔ Pembayaran berhasil (simulasi)";
        status.style.color = "green";
    },2000);
}
