function Telefon (marka, cena, kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
};

var Samsung = new Telefon("Samsung", "tysiondz", "moro");

Samsung.printInfo();