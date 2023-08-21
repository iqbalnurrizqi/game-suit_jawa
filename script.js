let tanya = true
while (true) {
    let p = prompt('masukan pilihan anda:orang, semut, gajah');

    // tangkap jawaban player

    // tangkap jawaban computer
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'semut'
    } else if (comp >= 0.34 <0.66) {
        comp = 'orang'
    } else {
        comp = 'gajah'
    };

  


    // buat rules
    let hasil = ' '
    if (p == comp) {
        hasil = 'SERI'
    } else if (p == 'gajah') {
    hasil = (comp == 'orang') ? 'player menang' : 'kalah';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'palyer menang' : 'kalah';
    } else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'player menang' : 'kalah';
    } else {
        hasil = 'anda memasukan jawaban yang salah...'
    }
   
    // tampilkan hasilnya
    alert(`kamu memilih : ${p} dan komputer memilih : ${comp} \n maka hasilnya adalah kamu ${hasil}`);

    tanya = confirm('coba lagi?');
    alert('terimakasih telah bermain')
}
