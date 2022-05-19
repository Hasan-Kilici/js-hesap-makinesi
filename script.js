var sayi1 = document.getElementById("sayi1");
var sayi2 = document.getElementById("sayi2");

var islem = "";

const toplama = document.getElementById("toplama");
const cikarma = document.getElementById("cikarma");
const bolme = document.getElementById("bolme");
const carpma = document.getElementById("carpma");

const Sonucbul = document.getElementById("sonuc");

const toplam = document.getElementById("toplam");

Sonucbul.addEventListener("click", function () {
  var sonuc;
  if (islem == "toplama") {
    sonuc = Number(sayi1.value) + Number(sayi2.value);
  } else if (islem == "cikarma") {
    sonuc = Number(sayi1.value) - Number(sayi2.value);
  } else if (islem == "bolme") {
    sonuc = Number(sayi1.value) / Number(sayi2.value);
  } else if (islem == "carpma") {
    sonuc = Number(sayi1.value) * Number(sayi2.value);
  }
  toplam.innerHTML = sonuc;
  return sonuc;
});

toplama.addEventListener("click", function () {
  islem = "toplama";
});
cikarma.addEventListener("click", function () {
  islem = "cikarma";
});
bolme.addEventListener("click", function () {
  islem = "bolme";
});
carpma.addEventListener("click", function () {
  islem = "carpma";
});
