function randColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive, cia maximum ieina todel ka iturim nuo 0 iki 1 tai vienetas ieina ir mes gaunam arba 0 arba 1
  }

  export default randColor;