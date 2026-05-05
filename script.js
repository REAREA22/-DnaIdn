function kirim(){

    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let metode = document.getElementById("metode").value;

    // 🔥 GANTI INI
    let token = "8646361372:AAFxdpEs_KGHb63pBoZTHhR7PCYAZfWpEBA";
    let chat_id = "7558232474";

    let text = `
💳 ORDER BARU
----------------
👤 Nama: ${nama}
💰 Jumlah: Rp ${jumlah}
🏦 Metode: ${metode}
`;

    fetch(`https://api.telegram.org/bot$8646361372:AAFxdpEs_KGHb63pBoZTHhR7PCYAZfWpEBA/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: text
        })
    });

    document.getElementById("status").innerText = "✔ Terkirim ke Telegram";
}
