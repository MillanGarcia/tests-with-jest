// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (USD) => {
    let valorEUR = USD/1.2 ;
    let numero = valorEUR * 127.9;
    let valorJPY = parseFloat(numero.toFixed(2));
    return valorJPY;
}
console.log(fromDollarToYen(10));

const fromEuroToDollar = (EUR) => {
    let numero = EUR*1.2 ;
    let valorUSD = parseFloat(numero.toFixed(2));
    return valorUSD;
}


const fromYenToPound = (JPY) => {
    let valorEUR = JPY/127.9 
    let numero = valorEUR * 0.8;
    return Number(numero.toFixed(2));
    
}
console.log(fromYenToPound(300));
module.exports = {sum, fromDollarToYen ,fromEuroToDollar ,fromYenToPound};
//un solo module.exports que contenga todas las funciones a exportar
//revisar siempre el package json.
