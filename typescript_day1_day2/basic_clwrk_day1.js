let numArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
for (let i of numArr) {
    console.log(String(i) + ".  Row of multiplications:");
    console.log("type of i ", typeof (i));
    for (let j of numArr) {
        console.log(String(i) + " X " + String(j) + " = ", String(i * j));
    }
    console.log("_____________________________________");
}
var br = "<br>";
document.write();
const nameArrObj = [
    {
        "fname": 'Julie',
        "lname": 'Larssen_1'
    }, {
        "fname": 'Julie',
        "lname": 'Larssen_2'
    }, {
        fname: 'Julie',
        lname: 'Larssen_3'
    }, {
        fname: 'Julie',
        lname: 'Larssen_4'
    }, {
        fname: 'Ulije',
        lname: 'Larssen_5'
    }, {
        fname: 'Julie',
        lname: 'Larssen_6'
    }, {
        fname: 'Julie',
        lname: 'Larssen_7'
    }, {
        fname: 'Julie',
        lname: 'Larssen_8'
    }, {
        fname: 'Ejuli',
        lname: 'Larssen_9'
    }, {
        'fname': 'Eiluj',
        'lname': 'Larssen_10'
    }
];
var nameElem = document.getElementsByTagName('h1');
nameElem[0].innerHTML = ""; //reset DOM
nameArrObj.forEach((nameObj) => {
    /*     console.log("html elem  ", nameElem[0],"nameObj  ", nameObj);
        console.log( "der vorname",typeof(nameObj.fname)); */
    nameElem[0].innerHTML += `<p>${nameObj.fname}&nbsp</p>`;
});
setTimeout(() => {
    //do somethin delayed with 5 sec
    console.log("the last names in that arr:  ");
    nameArrObj.forEach((nameObj) => {
        console.log(nameObj.lname);
    });
}, 5000);
