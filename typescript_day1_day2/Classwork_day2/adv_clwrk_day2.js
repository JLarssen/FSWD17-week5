"use strict";
class Vehicles {
    constructor(id, type, hersteller, modell, zylinderanzahl, motortyp, motorleistung, productionyear, euroklasse, km, number, img) {
        this.id = id;
        this.type = type;
        this.hersteller = hersteller;
        this.modell = modell;
        this.zylinderanzahl = zylinderanzahl;
        this.motortyp = motortyp;
        this.motorleistung = motorleistung;
        this.productionyear = productionyear;
        this.euroklasse = euroklasse;
        this.km = km;
        this.num_seats = number;
        this.img = img;
    }
    printVehicleInfo() {
        console.log("in der zusatzinfo-funktion!");
        // let returnInfo = document.getElementById("info");
        /* let str_zusatzinfo: string = "";
        if (this.type instanceof Trucks) {
            str_zusatzinfo = `Mit einem Gewicht von: ${this.weight} ist die Höchstgeschwindigkeit ${this.may-speed}.`

        } else if (this.type instanceof Motorbikes) {
            if (this.tablethalterung)
            str_zusatzinfo = `Das Modell kommt mit einer Tablethalterung.`;
            if (this.elektroantrieb) = `Mit dem Elektroantrieb sind sie C02-neutral unterwegs!`

        } */
        return `<div class="card px-4 my-4" style="width: 22rem;">
                <img src="${this.img}" class="card-img-top" alt="hh">
                <div class="card-body">
                    <h5 class="card-title">${this.hersteller} ${this.modell}</h5>
                    <p class="card-text">Dieser ${this.zylinderanzahl}-Zylindermotor hat eine Leistung von${lz}${this.motorleistung} .</p>
                    <p class="card-text"> Baujahr: ${this.productionyear}, Schadstoffklasse: ${this.euroklasse}, Antriebsart: ${this.motortyp}</p>
                    <p class="card-text">Kilometerstand: ${this.km}</p>
                    <!--  <p><button type="button" id="preis" class="btn btn-warning">Calculate price</button>
                    <button type="button" id="close" class="btn btn-primary">Close</button></p> -->
                </div>
            </div>`;
    }
} // vehicle-class
class Trucks extends Vehicles {
    constructor(id, type, hersteller, modell, zylinderanzahl, motortyp, motorleistung, productionyear, euroklasse, km, num_seats, img, weight, max_speed) {
        super(id, type, hersteller, modell, zylinderanzahl, motortyp, motorleistung, productionyear, euroklasse, km, num_seats, img);
        this.weight = weight;
        this.max_speed = max_speed;
    }
    printTruckExtraInfo() {
    }
}
;
class Motorbikes extends Vehicles {
    constructor(id, type, hersteller, modell, zylinderanzahl, motortyp, motorleistung, productionyear, euroklasse, km, num_seats, img, e_antrieb, halterung) {
        super(id, type, hersteller, modell, zylinderanzahl, motortyp, motorleistung, productionyear, euroklasse, km, num_seats, img);
        this.elektroantrieb = e_antrieb;
        this.tablethalterung = halterung;
    }
}
;
function showPanel(paneldata, arr_kfz) {
    let resultElement = document.getElementById("hero");
    console.log("Section flexpanel ", resultElement);
    for (let i = 0; i < paneldata.length; i++) {
        let type_str = paneldata[i][0];
        let img_str = paneldata[i][1];
        resultElement.innerHTML += `<div id="img_${i}"><h5>Our ${type_str} models</h5>
        <img src = ${img_str} class="img-fluid mx-3 width200 rounded" alt="car">
        <ul class="list-group" id="lg_${i}"></ul></div>`;
    }
    ;
    let listGr_0 = document.getElementById("lg_0");
    let listGr_1 = document.getElementById("lg_1");
    let listGr_2 = document.getElementById("lg_2");
    let listGr_3 = document.getElementById("lg_3");
    // add appropriate model to 4 different lists:
    arr_kfz.forEach((kfz, idx) => {
        kfz.id = idx;
        let kfz_brand;
        let kfz_mod;
        // wenn gleich, dann liefert compare-func Ziffer 0
        if (kfz.type.toLowerCase().localeCompare('limousine') == 0) {
            kfz_brand = kfz.hersteller;
            kfz_mod = kfz.modell;
            listGr_0.innerHTML += `<li class="list-group-item width200 mx-3" ><a class="model--link" id="${idx}" href="#">${kfz_brand} ${kfz_mod}</a></li>`;
        }
        if (kfz.type.toLowerCase().localeCompare('minivan') == 0) {
            kfz_brand = kfz.hersteller;
            kfz_mod = kfz.modell;
            listGr_1.innerHTML += `<li class="list-group-item width200 mx-3" id="li_${idx}"><a class="model--link" id="${idx}" href="#">${kfz_brand} ${kfz_mod}</a></li>`;
        }
        if (kfz.type.toLowerCase().localeCompare('motorcycle') == 0) {
            kfz_brand = kfz.hersteller;
            kfz_mod = kfz.modell;
            listGr_2.innerHTML += `<li class="list-group-item width200 mx-3" id="li_${idx}"><a class="model--link" id="${idx}" href="#">${kfz_brand} ${kfz_mod}</a></li>`;
        }
        if (kfz.type.toLowerCase().localeCompare('truck') == 0) {
            kfz_brand = kfz.hersteller;
            kfz_mod = kfz.modell;
            listGr_3.innerHTML += `<li class="list-group-item width200 mx-3" id="li_${idx}"><a class="model--link" id="${idx}" href="#">${kfz_brand} ${kfz_mod}</a></li>`;
        }
    });
    // alle Modelle wurden soeben generiert
    /* function printVehicleButtons () {
         let cardInfo = document.getElementsByClassName("card-body");    // ok cause only one card is shown on that page
         cardInfo[0].innerHTML += `<p><button type="button" id="preis" class="btn btn-warning">Calculate price</button>
         <button type="button" id="close" class="btn btn-primary">Close</button>`;
     };
 
     function calculate(kfz) {
         console.log(" das kfz-objekt im calc-func", kfz);
         let price = "766€";
         let cardInfo = document.getElementsByClassName("card-body");
         cardInfo[0].innerHTML +=`Der Mietpreis pro Woche betr&auml;gt für Sie als neuer Kunde ${price}`
     };  */
    return resultElement;
} // end show-panel mit/ohne Zusatzinfo aus Truck oder Motorcycle
//  performing scriptcode from here:
//  Erzeugung von 2 Vehicles, 1 Motorbikes, 1 Trucks Objekt mit jeweils 3 Untermodellen für das hero-Panel 
let kfz1 = new Vehicles(undefined, 'Limousine', 'Audi', 'RS4-Avant', 6, 'Benzin', '145 PS', '2015', "E4", 116000, 5, "img/Audi-RS4-Avant.jpg");
let kfz2 = new Vehicles(undefined, 'Limousine', 'Hyundai', 'Ioniq 6', 0, 'Electric', '320 kW', '2019', "E5", 55000, 5, "img/Hyundai-Ioniq-6.jpg");
let kfz3 = new Vehicles(undefined, 'Limousine', 'Skoda', 'Enyaq Coupé RSiV', 0, 'Electric', '220 kW', '2020', "E5", 50000, 5, "img/Skoda-Enyaq.jpg");
let kfz4 = new Vehicles(undefined, 'Minivan', 'Ford', 'Custom', 4, 'Benzin', '133 PS', '2017', "E5", 16000, 3, "img/Ford_Custom.jpg");
let kfz5 = new Vehicles(undefined, 'Minivan', 'Ford', 'E-Transit', 0, 'Electric', '360 kW', '2021', "E5", 44000, 3, "img/Ford_ETransit.jpg");
let kfz6 = new Motorbikes(undefined, 'Motorcycle', 'Harley Davidson', 'Road King Tourer', 2, 'Benzin', '84 PS', '2021', "E3", 10000, 1, "img/HarleyDavidson-RKT.jpg", false, true);
let kfz7 = new Motorbikes(undefined, 'Motorcycle', 'Yamaha', 'RD 350', 2, 'Benzin', '50 PS', '1987', "E3", 134000, 1, "img/Yamaha-RD350.jpg", false, false);
let kfz8 = new Motorbikes(undefined, 'Motorcycle', 'Hercules', 'W2000', 2, 'Wankelmotor', '27 PS', '1987', "E3", 151000, 1, "img/Hercules-W2000.png", false, false);
let kfz9 = new Trucks(undefined, 'Truck', 'MAN', 'TGA', 6, 'Diesel', '310 PS', '2007', "E3", 195000, 3, "img/MAN-TGA.jpg", '9100 kg', '110 Kmh');
const lz = `&nbsp`;
// for the 4 different types the indexes 0-3 are assigned to the panel-listgroup with id+suffix index
const arr_panel_img = [["limousine", "img/Audi-RS4-Avant.jpg"], ["minivan", "img/Ford_ETransit.jpg"], ["motorbike", "img/Yamaha-RD350.jpg"], ["truck", "img/MAN-TGA.jpg"]];
const arr_kfz = [kfz1, kfz2, kfz3, kfz4, kfz5, kfz6, kfz7, kfz8, kfz9];
console.log(arr_panel_img);
showPanel(arr_panel_img, arr_kfz);
let link_show = document.querySelectorAll(".list-group-item");
let returnInfo = document.getElementById("info");
link_show.forEach((value, i) => {
    link_show[i].addEventListener("click", function () {
        console.log(" beim event-listener reg   ", value, "  und aus dem kfz_arr mit i geholt:    ", arr_kfz[i].modell);
        returnInfo.innerHTML = arr_kfz[i].printVehicleInfo();
        printVehicleButtons();
        document.getElementById("preis").addEventListener("click", () => {
            calculate(arr_kfz[i]);
        });
        document.getElementById("close").addEventListener("click", () => { returnInfo.innerHTML = closeBtn(); });
    });
});
function closeBtn() {
    let returnInfo = document.getElementById("info");
    //document.getElementById("close").addEventListener("click", () => {
    console.log("das info element:  ", returnInfo);
    //returnInfo.innerHTML = ``;
    return ``;
}
;
function printVehicleButtons() {
    let cardInfo = document.getElementsByClassName("card-body"); // ok cause only one card is shown on that page
    cardInfo[0].innerHTML += `<p><button type="button" id="preis" class="btn btn-warning">Calculate price</button>
            <button type="button" id="close" class="btn btn-primary">Close</button>`;
}
;
function calculate(kfz) {
    console.log(" das kfz-objekt im calc-func", kfz);
    let price = "766€";
    let cardInfo = document.getElementsByClassName("card-body");
    cardInfo[0].innerHTML += `Der Mietpreis pro Woche betr&auml;gt für Sie als neuer Kunde ${price}`;
}
;
