const nama = "alpito gilang ramadhan";
let usia = 17;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;
    if (usia >= 16 && usia < 20) {
        //  INI ADALAH KONDISI PERTAMA
       generasi = "generasi remaja";

    }
    else if (usia >= 5 && usia < 15) {
        generasi = "generasi bocah";
    }
    else if (usia <= 4) {
        generasi = "generasi bayi";
    }
    else {
        //  INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        generasi = "generasi dewasa";
    }

   return biodata.innerHTML= generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
