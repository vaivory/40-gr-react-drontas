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
data.forEach(e=>console.log(e.name)); //nereikia nieko prolygintanes for Each nieko negrazina

//Sukurti masyvą, kuriame visi red yra pakeisti į orange DONE!
const newData1=data.map(e=>e.color: 'orange')


