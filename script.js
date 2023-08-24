let barangCounter = 0;
let totalSemua = 0;

function tambahBarang() {
    barangCounter++;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><input type="text" id="nama-barang-${barangCounter}" /></td>
        <td><input type="number" id="harga-${barangCounter}" /></td>
        <td><input type="number" id="jumlah-${barangCounter}" oninput="hitungTotal(${barangCounter})" /></td>
        <td><span id="total-barang-${barangCounter}">0</span></td>
    `;

    document.getElementById("barang-list").appendChild(newRow);
}

function hitungTotal(counter) {
    const harga = parseFloat(document.getElementById(`harga-${counter}`).value);
    const jumlah = parseInt(document.getElementById(`jumlah-${counter}`).value);
    const total = harga * jumlah;
    
    document.getElementById(`total-barang-${counter}`).textContent = formatAngka(total);
    
    hitungTotalSemua();
}

function formatAngka(angka) {
    return angka.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,');
}

function hitungTotalSemua() {
    totalSemua = 0;

    for (let i = 1; i <= barangCounter; i++) {
        const totalBarang = parseFloat(document.getElementById(`total-barang-${i}`).textContent.replace(/,/g, ''));
        totalSemua += totalBarang;
    }

    document.getElementById("total-semua").textContent = formatAngka(totalSemua);
}
function hitungBagiDuaBelas() {
    const hasilPembagian = totalSemua / 12;
    document.getElementById("hasil-pembagian").textContent = formatAngka(hasilPembagian);
}

// function hitungBagiDuaBelas() {
//     const hasilPembagian = totalSemua / 12;
//     document.getElementById("hasil-pembagian1").textContent = formatAngka(hasilPembagian);
// }

function resetSemua() {
    const tbody = document.getElementById("barang-list");
    tbody.innerHTML = "";
    barangCounter = 0;
    totalSemua = 0;
    document.getElementById("total-semua").textContent = formatAngka(totalSemua);
    document.getElementById("hasil-pembagian").textContent = "0";
}