console.log('Labutis');
function rand(min, max) {  //cia yra random skaiciau f-ja
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
console.log(rand(5, 10));  //daugelis musu uzdaviniu bus paremta sita rand f-ja.

//Sugeneruoti masyvą, kuriame yra 10 elementų, o tie elementai atsitiktiniai skaičiai nuo 100 iki 999 DONE!

const array = [...Array(10)] // array size is 10
    .map(_ => rand(100, 999)); // je isintakse reikalauja kad kazkas butu, o mum to visai nereikia, tuomet tokiam kintamajam duodam pavadinima _ .t.y kintamasis kuris yra nepanaudotas
console.log(array);

// mapas eina per visus elementus, paima pirma elementa, su juo kazka padaro ir grazina perdaryta elementa, tada paima antra  el-ta ir grazina antra perdaryta el-ta
//console.log([...Array(10)]); //spread paimam kokia nors struktura, pvz masyvo ir daro nauja masyvo, paprastas kopijaviams ir tolygus spreadinimui

// const a = [4, 5, 6];
// const naujasA = [...a]; //mes iskleidem sena masyva ir sukurem nauja masyva, kuris yra visiskai nepriklausomas
// const tasPatA = a; //sukurem aliasa

// naujasA.push(99);
// tasPatA.push(77);
// a.push(15);

// console.log('A', a);
// console.log(naujasA);
// console.log(tasPatA);

array.forEach(e => console.log('forEach', e)); //tiesiog pakilnoja elemtus ir nieko su jais nedaro
array.map(e => console.log('map', e)); //paima ir padaro kopija masyvo ir pereina per jo elementus


const fe = array.forEach(e => 1); //tiesiog pakilnoja elemtus ir nieko su jais nedaro, cia nieko negalilm padaryti su eltais.
const map = array.map(e => e + 1); //paima ir padaro kopija masyvo ir pereina per jo elementus, galima kazka padaryti su elemntais
console.log(fe);
console.log(map); // mapas tai ka grazina ideta i nauja el-ta

const cats = [

    { name: 'Pilkis', weight: 4 },

    { name: 'Murka', weight: 7 },

    { name: 'Keris', weight: 3 }

];

console.log(cats);

//Sukurti naują masyvą, kuriame visi katinukai būtų 1 svoriu sunkesni DONE!
const cats2 = cats.map(c => ({ ...c, weight: c.weight + 1 })); //nereikia kopijuoti jei nieko nedarom su originalu. Kur nukopinam todel su spread visus catinu dalykus, o kur weight tai mes pridedam vienetuka

console.log(cats2);

//Sukurti naują masyvą, kuriame visi katinukai būtų random nuo 3 iki 10 svorio DONE!
const cats3 = cats.map(c => ({ ...c, weight: rand(3, 10) }));
console.log(cats3);

//Kiekvienas katinukas gauna papildomą savybę takesPill kuri atsitiktiniu būdu yra arba 'yes' arba 'no' DONE!
const cats4 = cats.map(c => ({ ...c, takesPill: rand(0, 1) ? 'yes' : 'no' }));
console.log('Cats4', cats4);
