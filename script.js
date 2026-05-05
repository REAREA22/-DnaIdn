function kirim(){

    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let metode = document.getElementById("metode").value;

    let token = "8646361372:AAFxdpEs_KGHb63pBoZTHhR7PCYAZfWpEBA";
    let chat_id = "7558232474";

    let text = `💳 ORDER BARU\nNama: ${nama}\nJumlah: Rp ${jumlah}\nMetode: ${metode}`;

    let url = `https://api.telegram.org/bot${8646361372:AAFxdpEs_KGHb63pBoZTHhR7PCYAZfWpEBA}/sendMessage?chat_id=${7558232474}&text=${encodeURIComponent(text)}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("status").innerText = "✔ Terkirim ke Telegram";
    })
    .catch(err => {
        console.log(err);
        document.getElementById("status").innerText = "❌ Gagal kirim";
    });

}
