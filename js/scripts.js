function Telefon (marka, cena, kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}



Telefon.prototype.printInfo = function() {

    var self = this.cena
    function getWarrantyCost () {
        var warranty = 0.1 * self;
        console.log(warranty);
        return
    };
getWarrantyCost();

var wynikWarranty = getWarrantyCost();

    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Cena przedłużonej gwarancji wynosi " + wynikWarranty + ".");
};


var samsung = new Telefon("Samsung", "1000", "moro");
var nokia = new Telefon("Nokia", "2000","srebro");

samsung.printInfo();
nokia.printInfo();