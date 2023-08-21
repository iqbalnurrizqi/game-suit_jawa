let tanya = true
while (true) {
    let p = prompt('Piliih angka dari 1 sampai 10 :');

    // tangkap jawaban player

    // tangkap jawaban computer
    let comp = Math.random();

    if (comp < 0.10) {
        comp = '1'
    } else if (comp >= 0.10 <0.20) {
        comp = '2'
    } else if (comp >= 0.20 <0.30) {
        comp = '3'
    } else if (comp >= 0.30 <0.40) {
        comp = '4'
    } else if (comp >= 0.40 <0.50) {
        comp = '5'
    } else if (comp >= 0.50 <0.60) {
        comp = '6'
    } else if (comp >= 0.60 <0.70) {
        comp = '7'
    } else if (comp >= 0.70 <0.80) {
        comp = '8'
    } else if (comp >= 0.80 <0.90) {
        comp = '9'
    } else  {
        comp = '10'
    }

  


    // buat rules
    let hasil = ' '
    if (p == comp) {
        hasil = 'BETULLL'
    } else if (p == '1') {
    hasil = (comp == '2') ? 'ANGKA YANG KAMU PILIH TERLALU TINGGI' : 'ANGKA YANG KAMU PILIH TERLALU RENDAH';
    } else if (p == '2') {
    hasil = (comp == '3') ? 'ANGKA YANG KAMU PILIH TERLALU TINGGI' : 'ANGKA YANG KAMU PILIH TERLALU RENDAH';
    }else if (p == '4') {
    hasil = (comp == '5') ? 'ANGKA YANG KAMU PILIH TERLALU TINGGI' : 'ANGKA YANG KAMU PILIH TERLALU RENDAH';
    }

   
    // tampilkan hasilnya
    alert(`kamu memilih : ${p}\n maka hasilnya adalah kamu ${hasil}`);

    tanya = confirm('coba lagi?');
    alert('terimakasih telah bermain')
}
