// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

/*const {fromEuroToDollar} = require('./app.js');*/

test("One euro should be 1.206 dollars", () => {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    let total = fromEuroToDollar(3.5);
    // hago mi comparacion (la prueba)
    expect(total /*fromEuroToDollar(3.5)*/).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("10 dollars should be  1065.83 yens", () => {
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    let total = fromDollarToYen(10);
    // hago mi comparacion (la prueba)
    expect(total /*fromEuroToDollar(3.5)*/).toBe(1065.83); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("300 yens should be 1.88 pounds", () => {
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    let total = fromYenToPound(300);
    // hago mi comparacion (la prueba)
    expect(total /*fromEuroToDollar(3.5)*/).toBe(1.88); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})