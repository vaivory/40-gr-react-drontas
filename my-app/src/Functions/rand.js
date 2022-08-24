function rand(min, max) {  //cia yra random skaiciau f-ja
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //Cia neieina max reiksme, todel jei bus nuo 0 iki 1 tai vienas neieina todel visada bus 0.
}

export default rand;