const {sum, mult, sub, div} = require('../src/calculadora.js');

test('Verificar numeros positivos', ()=>{
    expect(sum(2,7)).toBe(9); 
    expect(sum(2,7)).toBe(7); 
    expect(mult(5,3)).toBe(15);
    expect(sub(2,7)).toBe(-5);
    expect(div(35,3)).toBe(11.666666666666666);
});

test('Verificar numeros negativos', ()=>{
    expect(sum(-2,2)).toBe(0);
});
