console.log('labas');

const data = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

//map ir forEach

// const fe = array.forEach(e => 1); //tiesiog pakilnoja elemtus ir nieko su jais nedaro, cia nieko negalilm padaryti su eltais.
// const map = array.map(e => e + 1); //paima ir padaro kopija masyvo ir pereina per jo elementus, galima kazka padaryti su elemntais
// console.log(fe);
// console.log(map); // mapas tai ka grazina ideta i nauja el-ta

//Su forEach konsolėje atspausdinti masyvo vardus DONE!
//data.forEach(e=>console.log(e.name));
data.forEach(e => console.log(e.name)); //nereikia nieko prolygintanes for Each nieko negrazina

//Sukurti masyvą, kuriame visi red yra pakeisti į orange DONE!
const newData1 = data.map(_ => ({ ...data, color: 'orange' }));
console.log(newData1);

const newData2 = data.map(e => e.color == 'red' ? { ...e, color: 'orange' } : { ...e }); // jei raudona spalva tuomet pakeiciam o oranzine arba tiesiog perrasom ta pacia info kuri buvo
console.log(newData2);

//padaryti masyvo kopij1 kur poriniai paga id type car objektai turi color black DONE!
const newData3 = data.map(e => (e.type == 'car') && (e.id % 2 == 0) ? { ...e, color: 'black' } : { ...e });
console.log(newData3);

//Reikia sukurti masyvo kopiją, kuriame visi vardai prailginti iki 8 pridedant gale * jeigu tie vardai trumpesni nei 4 simboliai DONE!
const newData4 = data.map(e => (e.name.length < 4) ? { ...e, name: e.name.padEnd(8, '*') } : { ...e });
console.log(newData4);

const data2 = [
    { id: 1, list: [8, 8, 22], color: 'red' },
    { id: 2, list: [74, 5, 220, 7], color: 'blue' },
    { id: 3, list: [8, 1, 0, 0, 8, 22], color: 'red' }
];

console.log('Data2', data2);
//padaryti masyvo kopiją, kurioje list masyvai prailginti vienu elementu, lygiu 0 DONE!
const newData5 = data2.map(e => ({ ...e, list: [...e.list, 0] }));
console.log(newData5);

//filter - mes negalime keisti elemento turinio. Mes galime sumazinti elemtu kieki. Jis daro kopija kaip map
const newData6 = data2.filter(e => e.color == 'red'); //cia turim grazinti atsakyma. Jei true tai reiskia visi elemtai yra geri ir juos perkels i newData6. Jei bus false tai gausim tuscia masyva nes tipo visos reiksmes yra blogos
//console.log(newData6);

//Padaryti kopiją masyvo be typre animal DONE!
const newData7 = data.filter(e => e.type !== 'animal');
//console.log(newData7);

//consoleje atspausdinti animal tipo vardus.
data.filter(e => e.type == 'animal' ? console.log(e.name) : false);
data.filter(e => e.type == 'animal').forEach(a => console.log(a.name)); //cia sujungem 2 metodus

//Padaryti masyvą su žaliais žvėrim DONE!
const newData8 = data.filter(e => e.type == 'animal' && e.color == 'green');
//console.log(newData8);

//sukuri naują masyvą iš car ir man, o jų spalvas pakeist i black jeigu spalva yra ne red DONE!
const newData9 = data.filter(e => e.type == 'car' || e.type == 'man').map(e => e.color !== 'red' ? { ...e, color: 'black' } : { ...e });
//arba galima taip padaryti
const newData10 = data.map(e => e.color !== 'red' ? { ...e, color: 'black' } : { ...e }).filter(a => a.type == 'car' || a.type == 'man');

console.log('newdata9', newData9);
console.log('newdata10', newData10);

//Ištrinti elementą su id 6 DONE!
const newData11 = data.filter(e => e.id !== 6);
//const newData11 = data.filter(e => e.id !== 6).map((e,i)=>({...e, id:i+1}));  // cia pvz kaip pakeisti ID numeracija, bet siaip ID niekas nekada nekeicia
console.log('newData11', newData11);
//niekada nieko nedarykit su indexais

//sort - rusiavimas,jei metodas yra destrukcinis (metodas kuris panaikina kazkokia informacijos dali, pvz map metodas, filter), sort nera destrukcinis metodas.
//sort keicia masyvo indeksa, sort dirba su originalu !!! Pries sortininma reiketu pagaminti kopija.
//visi destrukciniai metodai nedirba su originalu bet gamina kopija

//egzistuoja sort algoritmai
//sorto f-ja nori is musu zinoti teigiama skaiciu 1, arna neigiama skaiciu -1 arba nuli 0. Kai sortinam gaunam dvi reiksmes A ir B.
//Jei A,B tvarka tinka tuomet mes grazinam 1. (A,B ->1 --> A,B)
//Jei B,A tvarka tuomet -1. (A,B ->-1 --> B,A)
//Jei A=B tvarka tuomet 0. (A,B ->0 --> A=B)

//pvz rusiavimo f-ja kuri surusiuos pagal varda.
//kadangi sort dirba ant originalo tai darom taip:
const newData12 = [...data]; //padarom kopija su kuria ir dirbsim
newData12.sort((a, b) => {
    if (a.name > b.name) {
        return -1
    };
    if (a.name < b.name) {
        return 1
    }
    return 0;
});

console.log('newData12', newData12);
console.log('A' < 'a'); //ascii table https://www.rapidtables.com/code/text/ascii-table.html prie simboliu yra numeriai, tai mes ir lyginam tu raidziu numerius.
//tai A yra 65 ,o a mazoji yra97. tai 97 yra daugiau negu A.
//localCompare - sitas lygina pagal abecele https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
//galima rusiavima daryti ir su situ localeCompare pvz.
const newData13 = [...data];
newData13.sort((a, b) => a.name.localeCompare(b.name));
console.log('localeCompare pvz', newData12); //rusiuoja pagal localizuota tos salies abc 
//console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); 'en' reiskia kad pagal english abecele.

//dabar rusiavimas su skaiciais
const newData14 = [...data];
newData14.sort((a, b) => b.id - a.id); //skaiciu lyginam tiesiog darydami aritmetine operacija
console.log('Skaiciaus rusiavimas', newData14);

//išrūšiuoti pagal name žodžio ilgį - pirmiausiai ilgiausi DONE!
const newData15 = [...data];
newData15.sort((a, b) => b.name.length - a.name.length);
console.log('newData15', newData15);

//pakeisti masyvo isdeliojima taip, kad virsuje butu type 'car'
const newData16 = [...data];
newData16.sort((a) => a.type == 'car' ? -1 : 1);
console.log('newData16', newData16);